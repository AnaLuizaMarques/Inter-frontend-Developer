function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Marcelo', 'Admin')
usuarios.set('Haysla', 'Admin')
usuarios.set('Felipe', 'User')
usuarios.set('Maria', 'Dev')

console.log(getAdmins(usuarios))
