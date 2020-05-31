type Handler = () => void
type ListenerEvent = 'saved'

interface Listener {
    event: ListenerEvent
    handler: Handler
}

class LikeEvents {
    private listeners: Map<number, Listener> = new Map()

    /**
     * Returns a disposer
     */
    public listen(listener: Listener): () => void {
        const id = Date.now()

        this.listeners.set(id, listener)

        return () => this.remove(id)
    }

    private remove(id: number) {
        this.listeners.delete(id)
    }

    public onLike() {
        this.listeners.forEach(listener => {
            if (listener.event === 'saved') {
                listener.handler()
            }
        })
    }
}

export const likeEventHandler = new LikeEvents()
