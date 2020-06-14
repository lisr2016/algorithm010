学习笔记 Week1

本周学习的内容有数组、链表、跳表、栈、队列、优先队列、双端队列

Array :  Access O(1) Search O(n) Insertion O(n) Deletion O(n)

        jdk10 ArrayList
        add()，根据ensureCapacity方法的源码， 当前数组长度不够时，会申请一个长度*2的新数组，把旧数组copy到新数组。如果对ArrayList进行大量的修改操作，会有非常多的arrayCopy，不是很高效

LinkedList :  Access O(n) Search O(n) Insertion O(1) Deletion O(1)

        // GeeksForGeeks 中链表的定义

        class LinkedList {
            Node head;

            class Node {
                int data;
                Node next;

                Node ( int d ) { data = d; }
            }
        }

        // Java 中是 Doubly-Linked List
        // Node class，名字是Entry
        private static final class Entry<T>
        {
            T data;

            Entry<T> next;

            Entry<T> previous;

            Entry(T data)
            {
                this.data = data
            }
        }

Skip List :  Access  Average:O(log(n))      Worst:O(n)
             Search  Average:O(log(n))      Worst:O(n)
             Insertion  Average:O(log(n))   Worst:O(n)
             Deletion  Average:O(log(n))    Worst:O(n)

             给元素有序的链表加速的数据结构
             升维思想 + 空间换时间
             对标的时平衡树(AVL Tree)和二分查找
             热门项目里用来替代平衡树： 如Redis，LevelDB

             增加/删除一个元素 需要把索引更新一遍

Stack ：  Access O(n) Search O(n) Insertion O(1) Deletion O(1)


Queue ：  Access O(n) Search O(n) Insertion O(1) Deletion O(1)


deque(Double-End Queue):  Access O(n) Search O(n) Insertion O(1) Deletion O(1)


priority Queue:  Access O(log(n))  // 按照优先级取出
                 Insertion O(1)

         底层具体实现的数据结构较为多样和复杂：heap，bst，红黑树、avl、treap
