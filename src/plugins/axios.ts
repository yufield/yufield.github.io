import axios from 'axios'
import config from '../config'

axios.defaults.headers.common['Authorization'] = config.token;