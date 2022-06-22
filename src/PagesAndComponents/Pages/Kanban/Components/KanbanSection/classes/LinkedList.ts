import Node from './Node';
export default class LinkedList {
    head: Node;

    addNode(data: string) {
        if(this.head === undefined) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while(currentNode.next !== undefined) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(data, currentNode);
        }
    };


}