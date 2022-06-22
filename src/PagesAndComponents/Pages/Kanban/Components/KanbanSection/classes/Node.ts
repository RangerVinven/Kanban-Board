export default class Node {
    prev: Node; // Previous node
    next: Node; // Next node
    data: string;

    constructor(data: string, prev?: Node) {
        this.data = data;
        if(prev !== undefined) this.prev = prev;
    }
}

