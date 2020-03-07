const API_URL = 'http://localhost:8080'

async function login (email, password) {
  try {
    const response = await window.fetch(`${API_URL}/users/login`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    const payload = await response.json()
    if (!response.ok) {
      if (response.status >= 500) {
        payload.message = 'Ocurrió un error en el servidor'
        console.log('Ocurrió un error en el servidor')
      } else {
        payload.message = 'Las credenciales son incorrectas'
        console.log('Las credenciales son incorrectas')
      }
      return {
        ...payload,
        data: {
          token: ''
        }
      }
    }

    // const payload = await response.json()
    console.log(payload)
    window.sessionStorage.setItem(
      'authorization', payload.data.token
    )
    return payload
  } catch (error) {
    console.log('error hand', error)
    return {
      message: 'Todos me la pelan',
      data: {
        token: ''
      }
    }
  }
}
async function validateSession (token) {
  try {
    const response = await window.fetch(`${API_URL}/users/validate-session`, {
      headers: { authorization: token }
    })

    console.log(response)
    const payload = await response.json()

    if (!response.ok) {
      if (response.status >= 500) {
        payload.message = 'Ocurrió un error en el servidor'
        // console.log('Ocurrió un error en el servidor')
      } else {
        payload.message = 'El token es invalido'
      }
      return {
        ...payload,
        data: {
          token: ''
        }
      }
    }

    // const payload = await response.json()
    window.sessionStorage.setItem(
      'authorization', payload.data.token
    )
    return payload
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: 'Error al validar el token',
      data: {
        token: ''
      }
    }
  }
}

async function newPost (token, title, author, image, description, timeRead, category) {
  console.log(token, title, author, image, description, timeRead, category)
  try {
    const response = await window.fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({
        title: title,
        author: author,
        image: image,
        description: description,
        timeRead: timeRead,
        category: category
      })
    })
    const payload = await response.json()
    console.log(payload)
    return payload
  } catch (error) {
    console.log('Error al crear nuevo post')
    return {
      data: {
        newPost: ''
      }
    }
  }
}
async function getPosts (token) {
  try {
    const response = await window.fetch(`${API_URL}/posts`, {
      headers: { authorization: token }
    })
    console.log('Getting posts')
    const payload = await response.json()

    payload.data.allPosts = payload.data.allPosts.map((badpost) => ({
      id: badpost._id,
      imageUrl: badpost.image,
      title: badpost.title,
      text: badpost.description,
      readTime: badpost.timeRead,
      author: badpost.author,
      category: badpost.category
    }))
    console.log('getting posts width id', payload)
    return payload
  } catch (error) {
    console.log('error', error)
    return {
      data: {
        allPosts: []
      }
    }
  }
}

async function getPost (token, id) {
  try {
    const response = await window.fetch(`${API_URL}/posts/${id}`, {
      headers: { authorization: token }
    })
    console.log('Getting One post')
    const payload = await response.json()
    console.log(payload)
    // payload.data.allPosts = payload.data.allPosts.map((badpost) => ({
    //   imageUrl: badpost.image,
    //   title: badpost.title,
    //   text: badpost.description,
    //   readTime: badpost.timeRead,
    //   author: badpost.author,
    //   category: badpost.category
    // }))
    return payload
  } catch (error) {
    console.log('error', error)
    return {
      data: {
        post: []
      }
    }
  }
}

const api = {
  login,
  validateSession,
  newPost,
  getPosts,
  getPost
}

export default api
