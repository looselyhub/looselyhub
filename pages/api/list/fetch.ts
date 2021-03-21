import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import { ObjectID } from 'mongodb'
import Mongo from 'services/Mongo'
import axios from 'axios'

function getField(data: any, field: string) {
  if (field === null || field === undefined) {
    return data
  }
  const fields = field.split('.')
  let result = data
  fields.forEach((field) => {
    result = result[field]
  })
  return result
}

function parseObjectArray(data: any, parser: any) {
  const result = {
    value: '',
    name: parser.name,
    type: '',
  }
  const dataArray = getField(data, parser.field)
  const value = dataArray.map((innerData) =>
    getField(innerData, parser.innerParser)
  )
  result.value = value.toString()
  result.type = parser.innerType
  return result
}

function buildColumn(data: any, parser: any) {
  const result = {
    value: '',
    name: parser.name,
    type: '',
  }
  switch (parser.type) {
    case 'object_array':
      return parseObjectArray(data, parser)
    default:
      result.value = getField(data, parser.field)
      result.type = parser.type
  }
  return result
}

async function getListData(body: any) {
  const response = await axios.get(body.url)
  const data = response.data
  let listData = getField(data, body.listLocation)
  if (!Array.isArray(listData)) {
    listData = [listData]
  }
  const result = listData.map((rowData) => {
    return body.parser.map((parserField) => buildColumn(rowData, parserField))
  })
  return result
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  try {
    const mongo = new Mongo()
    const queryResponse = await mongo.query('list_view', {
      _id: new ObjectID(id),
    })
    const response = await getListData(queryResponse[0])
    res.statusCode = 200
    return res.json(response)
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
