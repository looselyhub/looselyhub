import { NextApiRequest, NextApiResponse } from 'next';
import ErrorManager from 'services/ErrorManager';
import util from 'util';
const exec = util.promisify(require('child_process').exec);
import { existsSync, unlinkSync } from 'fs';
const writeFile = util.promisify(require('fs').writeFile);

function createEnvContent(setupProps: any) {
  let result = '';
  result += `DOMAIN=https://${setupProps.domain}\n`;
  
  result += `EMAIL_PORT=${setupProps.port}\n`;
  result += `EMAIL_HOST=${setupProps.host}\n`;
  result += `EMAIL_USERNAME=${setupProps.user}\n`;
  result += `EMAIL_PASSWORD=${setupProps.password}\n`;
  result += `EMAIL_FROM=${setupProps.from}\n`;

  result += `ADMIN_USERNAME=${setupProps.adminUsername}\n`;
  result += `ADMIN_PASSWORD=${setupProps.adminPassword}\n`;

  let authorizedDomains = '[';
  for (let i=0; i < setupProps.authorizedDomains.length; i++) {
    authorizedDomains += `"${setupProps.authorizedDomains[i]}"`;
    if (i + 1 < setupProps.authorizedDomains.length) {
      authorizedDomains += ',';
    }
  }
  authorizedDomains += ']';
  result += `AUTHORIZED_DOMAINS=${authorizedDomains}\n`;
  
  if (setupProps.faviconURL && setupProps.faviconURL !== '') {
    result += `NEXT_PUBLIC_FAVICON=${setupProps.faviconURL}\n`;
  }
  if (setupProps.logoURL && setupProps.logoURL !== '') {
    result += `NEXT_PUBLIC_LOGO=${setupProps.logoURL}\n`;
  }
  if (setupProps.primaryColor && setupProps.primaryColor !== '') {
    result += `NEXT_PUBLIC_PRIMARY_COLOR=${setupProps.primaryColor}\n`;
  }
  if (setupProps.secondaryColor && setupProps.secondaryColor !== '') {
    result += `NEXT_PUBLIC_SECONDARY_COLOR=${setupProps.secondaryColor}\n`;
  }
  if (setupProps.pusherAppId && setupProps.pusherAppId !== '') {
    result += `NEXT_PUBLIC_PUSHER=${setupProps.pusherKey}\n`;
    result += `PUSHER_APP_ID=${setupProps.pusherAppId}\n`;
    result += `PUSHER_SECRET=${setupProps.pusherSecret}\n`;
  }
  return result;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (existsSync('./.env.local')) {
      throw new ErrorManager('Setup already made', '330');
    }
    
    const envText = createEnvContent(req.body);
    await writeFile('.env.local', envText);

    const { stdout2, stderr2 } = await exec(`sh ./scripts/start.sh ${req.body.domain} ${req.body.user}`);
    if (stderr2) {
      throw stderr2;
    }
    console.log('stdout2', stdout2);
    return res.send('Sucesso');
  } catch (error) {
    console.log(error)
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: error.message })
  }
}
