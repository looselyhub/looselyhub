import React, { useState, useCallback } from 'react'
import { Button, Checkbox, Form, Label } from 'semantic-ui-react'
import ICONS from './icons'

const GRID_FORMATS = [
  {
    label: 'FULL',
    value: '1fr / 1fr',
    urls: 1,
  },
  {
    label: '2 Collumns',
    value: '1fr / 1fr 1fr',
    urls: 2,
  },
  {
    label: '3 Collumns',
    value: '1fr / 1fr 1fr 1fr',
    urls: 3,
  },
  {
    label: '2 Rows / 2 Collumns',
    value: '1fr 1fr / 1fr 1fr',
    urls: 4,
  },
]

const DROPDOWN_ICONS = ICONS.map((icon) => {
  return {
    key: icon.name,
    value: icon.name,
    text: icon.name,
    content: (
      <div>
        <span className="material-icons">{icon.name}</span>
        {` ${icon.name}`}
      </div>
    ),
  }
})

export default function URLCrud() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [gridFormat, setGridFormat] = useState('1fr / 1fr')
  const [urls, setURLS] = useState<Array<string>>([''])
  const [isPublic, setIsPublic] = useState(true)
  const [username, setUsername] = useState('')
  const [showMenu, setShowMenu] = useState(true)
  const [icon, setIcon] = useState<string | null>()

  const changeURL = useCallback(
    (index) => (e) => {
      const newURLs = [...urls]
      newURLs[index] = e.target.value
      setURLS(newURLs)
    },
    [urls]
  )

  const handleFieldChange = useCallback(
    (field) => (e) => {
      switch (field) {
        case 'title':
          return setTitle(e.target.value)
        case 'slug':
          return setSlug(e.target.value)
        case 'username':
          return setUsername(e.target.value)
        case 'showMenu':
          return setShowMenu(e.target.value)
      }
    },
    []
  )

  const renderURLField = useCallback(() => {
    return urls.map((url, index) => (
      <Form.Field key={`url_field_${index}`}>
        <label>{`URL ${index + 1}`}</label>
        <input placeholder="URL" value={url} onChange={changeURL(index)} />
      </Form.Field>
    ))
  }, [urls])

  const handlePickerChecked = useCallback(
    (type) =>
      (e, { value }) => {
        const totalURLs = []
        switch (type) {
          case 'gridFormat':
            setGridFormat(GRID_FORMATS[value].value)
            for (let i = 0; i < GRID_FORMATS[value].urls; i += 1) {
              totalURLs.push('')
            }
            return setURLS(totalURLs)
          case 'isPublic':
            setUsername('')
            return setIsPublic(Boolean(value))
          case 'icon':
            return setIcon(value)
        }
      },
    [icon]
  )

  const renderFormatPicker = useCallback(() => {
    return (
      <Form.Group inline>
        <label>Grid Format</label>
        {GRID_FORMATS.map((format, index) => (
          <Form.Radio
            key={`grid_field_${index}`}
            label={format.label}
            value={index}
            checked={gridFormat === format.value}
            onChange={handlePickerChecked('gridFormat')}
          />
        ))}
      </Form.Group>
    )
  }, [gridFormat])

  const renderPublicPicker = useCallback(() => {
    return (
      <Form.Group inline>
        <label>Service permissions</label>
        <Form.Radio
          label={'Public'}
          value={1}
          checked={isPublic}
          onChange={handlePickerChecked('isPublic')}
        />
        <Form.Radio
          label={'Private'}
          value={0}
          checked={!isPublic}
          onChange={handlePickerChecked('isPublic')}
        />
      </Form.Group>
    )
  }, [isPublic])

  const renderUsername = useCallback(() => {
    if (!isPublic) {
      return (
        <Form.Field>
          <label>{'User Email'}</label>
          <input
            placeholder="mmmm@mmmm.com"
            value={username}
            onChange={handleFieldChange('username')}
          />
        </Form.Field>
      )
    }
    return <></>
  }, [isPublic, username])

  const iconPicker = useCallback(() => {
    return (
      <Form.Field>
        <label>Icon (Optional)</label>
        <Form.Input fluid icon placeholder="Buscar...">
          <Label basic>
            <span className="material-icons">{icon}</span>
          </Label>
          <Form.Dropdown
            labeled
            placeholder="Select service icon"
            search
            selection
            options={DROPDOWN_ICONS}
            onChange={handlePickerChecked('icon')}
          />
        </Form.Input>
      </Form.Field>
    )
  }, [icon])

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Title"
          value={title}
          onChange={handleFieldChange('title')}
        />
      </Form.Field>
      <Form.Field>
        <label>Slug</label>
        <input
          placeholder="Slug"
          value={slug}
          onChange={handleFieldChange('slug')}
        />
      </Form.Field>
      {renderFormatPicker()}
      {renderURLField()}
      {renderPublicPicker()}
      {renderUsername()}
      <Form.Field>
        <Checkbox
          label="Show Sidebar"
          checked={showMenu}
          onChange={handleFieldChange('showMenu')}
        />
      </Form.Field>
      {iconPicker()}
      <Button type="submit">Adicionar</Button>
    </Form>
  )
  // <div>
  //   <h2>Adicionar nova url</h2>
  // DONE:
  //   <h3>Title</h3>
  //   <h3>URL</h3>
  //   <h3>gridTemplate</h3>
  //   <h3>slug</h3>
  //   <h3>isPublic</h3>
  //   <h3>username</h3>
  //   <h3>showMenu</h3>
  //   <h3>icon</h3>
  // TODO: Save using token
  // TODO: Used for updates
  //   <h3>overwrite</h3>
  // </div>
}
