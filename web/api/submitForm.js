const formSubmit = ({fields, url}) => {
  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })
  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then((response) => response)
    .catch((error) => error)
}

export default formSubmit
