import java.util.*;
public class LinkedList{

     // Head of list
     Node head;


    /* Inner class Node made static so our main() can access it. */
    static class Node{
        int data;
        Node next;

        //Constructor
        Node(int d){
            data = d;
        }
    }


    /* Print the entire linked list */
    public void printList(){
        System.out.println(" ");
        Node node = head;
        while(node != null){
            System.out.print(node.data + " ");

            //go to next node
            node = node.next;
        }
        System.out.println(" ");
    }


    //Insert a new element to the list
    public static LinkedList insert(LinkedList l, int data){
        Node newNode = new Node(data);
        newNode.next = null;

        //if the list is empty we set head to the new node
        if(l.head == null){
            l.head = newNode;
            l.head.next = null;
        }else{
                Node last = l.head;
                while(last.next != null){
                    last = last.next;
                }
                last.next = newNode;
        }
        return l;
    }

    
    Node newNode(int data){
        Node node = new Node(data);
        return node;
    }

    /* Sorted insert into a linked list */
  void sortedInsert(Node newNode){

    Node currentNode;

    if(head == null || head.data > newNode.data){
        newNode.next = head;
        head = newNode;
    }else{
        currentNode = head;
        while(currentNode.next != null && currentNode.next.data < newNode.data){
                currentNode = currentNode.next;
                newNode.next = currentNode.next;
                currentNode.next = newNode;
        }
    }
    
  }




    public static void main(String args[]){
        LinkedList linkedlist = new LinkedList();
        Node node;
        node = linkedlist.newNode(5);
        linkedlist.sortedInsert(node);
        //n = linkedlist.newNode(9);
        //linkedlist.sortedInsert(n);
        node = linkedlist.newNode(3);
        linkedlist.sortedInsert(node);
        node = linkedlist.newNode(100);
        linkedlist.sortedInsert(node);
        linkedlist.printList();




        System.out.println(" ");
        
        LinkedList llist = new LinkedList();
        llist = insert(llist, 2);
        llist = insert(llist, 45);
        llist.printList();

    }

}