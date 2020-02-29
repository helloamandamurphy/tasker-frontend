export function fetchUsers() {
  fetch('http://localhost:3000/api/v1/users')
  .then(resp => resp.json())
  .then(data => console.log(data))
}
