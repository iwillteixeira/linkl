//CREATE THE NODE OR BOX TO ELEMENTS

//the class has a constructor witch receives the VALUE (value typed for the user) and for default set the first NEXT to null
class Element{
    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
  }
  
  //CREATE LINKEDLIST CLASS
  
  class LinkedList{
    //our constructor set the head variable to null Because at first there is no element inside it.
    //the same happens with size.
    constructor(){
      this.head = null
      this.size = 0;
    }
  
    //METHOD INSERT AT FIRST 
    insertFirst(value){
      this.head = new Element(value, this.head);
      this.size++
    }
  
    //METHOD ADD AT END
    addAtEnd(value){
      //First we create the element that will be inserted in the list
      let element = new Element(value);
      //Than we create the helper variable that will be use in the While loop;
      let current;
  
      //This if statament will check if there is an element in the index 0 or in another words in the HEAD
      if(this.head == null){
        //if there isn't any element in our list, than we going to add the element in the first index(HEAD)
        this.head = element;
        
      }
      else{
        //if we are here inside the ELSE statement, we know that there is one or more elements in our list.
        //so, we going to set the current equal to the first element in the list (HEAD)
        current = this.head;
        //now we need to loop throughout the list until we find the last element or in other words NEXT = NULL     e.g: linkedList =  3[] ,next -> 4[] ,next -> 5[] next-> null ]
        while(current.next !== null){
          //We set current to the next position until we find NEXT = null
          current = current.next
        }
        //Now that the loop is over we are in the right position! Last position with   current =(  element.value = 'some value'  and element.next = null )
        //So we set the current.next to the element that we create.  "line24:  let element = new Element(value)"
        current.next = element
        this.size++;
  
      }
    }
  
    //METHOD ADD AT INDEX
  
    addAtIndex(index, value){
      
      if(index > 0 && index > this.size){
        return;
      }
      if(index === 0){
        this.head = new Element(value, this.head);
        this.size++
        return;
      }
      let previous; //initiate this variable to store the previous value throughout the list.
      let current = this.head;  //set current to the first position
      let count = 0;  //set count zero
      let element = new Element(value) // create element given by the user
      while(count < index) {
        previous = current;      // e.g **previous**3[n] ->## current ##4[n] ->5[] -> 6[] ->null
        count++
        current = current.next
      }
  
      element.next = current
      previous.next = element;
      this.size++;
  
  
      
  
    }
  
    //REMOVE ELEMENT BY GIVEN INDEX
    remove(index){
      if(index > 0 && index > this.size ){
        console.log('type a lower number');
      }
      if(index === 0){
        this.head = this.next
        return
      }
      let current = this.head;
      let previous;
      let count = 0;
      while(count < index){
        count++;
        previous = current;   
        current = current.next;
        
      }
  
      previous.next = current.next
      this.size--;
  
  
    }
  
    //METHOD GET ELEMENT BY INDEX
  
    getElement(index){
      //first we set variable current to the first element of the list
      let current = this.head;
      let count = 0;  //this variable will help in the loop statement
  
      //IF THE INDEX TYPED FOR THE USER IS GREATER THAN ZERO AND GREATER THAN THE SIZE OF THE LIST.
      if(index > 0 && index > this.size){
        console.log('Sorry, there is no element')
        return;
      }
  
      //Here we start up the loop to go throughout the list until we reach the index that the user wants
      while(count < index ){
    
        current = current.next    // e.g **3[n] ->4[n] ->5[] -> 6[] ->null  | 3[] ->**4[] ->5[] -> 6[] ->null  (** represents the position of the current variable)
        count++; // increment count 
        
      }
      console.log(current.value)
    }
  
    //METHOD PRINT ELEMENTS
    printElements(){
      let current = this.head;
      let count = 0
      while(count <= this.size){
        console.log(current.value)
        current = current.next
        count++;
      }
    }
  }
  
  listNumbers = new LinkedList();
  listNumbers.addAtEnd(3);
  listNumbers.addAtEnd(4);
  listNumbers.addAtEnd(5);
  listNumbers.addAtEnd(6);
  
  listNumbers.addAtIndex(1,40)
  console.log('-----------------------')
  listNumbers.printElements()
  console.log(listNumbers)
  