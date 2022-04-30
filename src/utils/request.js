import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:4523/mock/918633/api',
  timeout: 1000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        }
      )
  })
}
export const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .patch(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        }
      )
  })
}
