import { defineComponent, PropType } from 'vue'
import Logo from '@/assets/logo.png'
import { HelloWorld } from '@/components/HelloWorld'
interface Student {
    name: string
    class: string
    age: number
}

export const Home = defineComponent({
    props: {
        success: { type: String },
        callback: {
            type: Function as PropType<() => void>
        },
        student: {
            type: Object as PropType<Student>,
            required: true
        }
    },
    render() {
        return (<div class="home">
            <img alt="Vue logo" src={Logo} />
            <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        </div>
        )
    },
    data() {
        return {
            message: 'Vue3 code style'
        }
    },
    computed: {
        reversedMessage(): string {
            return this.message.split(' ').reverse().join('')
        }
    }
})