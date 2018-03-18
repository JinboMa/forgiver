import * as qs from 'qs'

function replaceIds (ids: any, url: string) {
  let result = url

  for (let i in ids) {
    let reg = new RegExp(`{${i}}`, 'g')
    result = result.replace(reg, ids[i])
  }

  return result
}

export default {
  errors (err: Error) {
    return err
  },
  interceptors (config: any) {
    let type = config.type
    let ids = config.ids
    let url = config.url

    if (type === 'formData') {
      config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
      config.data = qs.stringify(config.data)
    }
    if (ids) {
      config.url = replaceIds(ids, url)
    }

    return config
  }
}
