type Handler = () => void
type ListenerEvent = 'login'

interface Listener {
    event: ListenerEvent
    handler: Handler
}

class AuthEvents {
    private listeners: Listener[] = []

    public listen(listener: Listener) {
        console.log('Add lstiener', listener)
        this.listeners.push(listener)
    }

    public onLogin() {
        this.listeners.forEach(listener => {
            if (listener.event === 'login') {
                listener.handler()
            }
        })
    }
}

export const authEventHandler = new AuthEvents()
