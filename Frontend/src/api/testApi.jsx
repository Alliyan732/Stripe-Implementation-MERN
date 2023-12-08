import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const getTestData = async () => {
    try {
        const response = await axios.get(`${API_URL}/test`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
