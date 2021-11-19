// Start with your code from last challenge.

// LINKEDlist next step TEST APROVED

class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
  
  class LinkedList {
    // setup head and tail
    constructor(){
      this.head = null
      this.size = 0
    }
      // add number to the end
    add(number) {
      // your code here
      let node = new Node(number)
      let position;
      if(!this.head){
        this.head = node;
        this.size++;
      }
      else{
        position = this.head
        //push items to next position
        while(position.next_node){
          position = position.next_node
        }
        //when position.next_node = null add the item
        position.next_node = node;
      }
      this.size++;
    }
  
    get(index) {
      // your code here
      let position = this.head;
      let count = 0;
      //start with first element
      while(position){
        if(count === index){
          return position.value
        }
        count++;
        position = position.next_node
      }
      return null;
    }
  
    addAt(index, value){
      if(index > 0 && index > this.size){
        return;
      }
      if(index === 0){
        this.head = new Node(value, this.head);
        this.size++;
        return;
      }
      const node = new Node(value)
      let current, previous;
  
      //current first
      current = this.head;
      let count = 0;
  
      while(count < index){
        previous = current
        count++;
        current = current.next_node
      }
      node.next_node= current;
      previous.next_node = node;
      this.size++;
  
    }
    //remove element at index
    remove(index){
      //if index is bigger than zero and bigger than the size of the linked list (null)
      if (index > 0 && index > this.size) {
        return;
      }
      let current = this.head;  // set current to the first element
      let previous; // set the variable previous
      let count =0; 
  
      if(index === 0){
        this.head = current.next_node;
      }
      else {
        while (count < index){
          count++;
          previous = current;
          current = current.next_node;
        }
        previous.next_node = current.next_node;
      }
      this.size--;
    }
  //private get node
    #get_node(index) {
      // your code here
      let position = this.head;
      let count = 0;
      //start with first element
      while(position){
        if(count === index){
          return position.value
        }
        count++;
        position = position.next_node
      }
      return null;
    }
  //return the private node
    getPrivate_node(){
      return this.#get_node()
    }
  
  }
  
  const list = new LinkedList()
  
  list.add(3)
  list.add(5)
  list.addAt(1, 11)
  list.addAt(0, 13)
  
  
  console.log(list.get(2))
  // => 11
  
  console.log(list.get(3))
  // => 5
  
  module.exports = LinkedList