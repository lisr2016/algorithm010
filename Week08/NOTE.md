学习笔记

位运算

将x最右边的n位清零： x & (~0<<n)

获取x的第n位值(0或者1)： (x>>n) & 1

获取x的第n位的幂值: x & (1<<n)

仅将第n位置为1: x | (1<<n)

仅将第n位置为0: x & (~(1<<n))

将x最高位至第n位(含)清零: x & ((1<<n)-1)

判断奇偶: x%2 == 1 --> (x&1) == 1, x%2 == 0 --> (x&1) == 0

x>>1 --> x/2

X=X&(X-1) 清零最地位的1

X&-1=> 得到最低位的1

X&~X=>0

布隆过滤器

一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。

优点是空间效率和查询时间都远远超过一般的算法，

缺点是有一定的误识别率和删除困难

 java实现:

 package com.github.lovasoa.bloomfilter;

 import java.util.BitSet;
 import java.util.Random;
 import java.util.Iterator;

 public class BloomFilter implements Cloneable {
   private BitSet hashes;
   private RandomInRange prng;
   private int k; // Number of hash functions
   private static final double LN2 = 0.6931471805599453; // ln(2)

   /**
    * Create a new bloom filter.
    * @param n Expected number of elements
    * @param m Desired size of the container in bits
    **/
   public BloomFilter(int n, int m) {
     k = (int) Math.round(LN2 * m / n);
     if (k <= 0) k = 1;
     this.hashes = new BitSet(m);
     this.prng = new RandomInRange(m, k);
   }

   /**
    * Create a bloom filter of 1Mib.
    * @param n Expected number of elements
    **/
   public BloomFilter(int n) {
     this(n, 1024*1024*8);
   }

   /**
   * Add an element to the container
   **/
   public void add(Object o) {
     prng.init(o);
     for (RandomInRange r : prng) hashes.set(r.value);
   }
   /**
   * If the element is in the container, returns true.
   * If the element is not in the container, returns true with a probability ≈ e^(-ln(2)² * m/n), otherwise false.
   * So, when m is large enough, the return value can be interpreted as:
   *    - true  : the element is probably in the container
   *    - false : the element is definitely not in the container
   **/
   public boolean contains(Object o) {
     prng.init(o);
     for (RandomInRange r : prng)
       if (!hashes.get(r.value))
         return false;
     return true;
   }

   /**
    * Removes all of the elements from this filter.
    **/
   public void clear() {
     hashes.clear();
   }

   /**
    * Create a copy of the current filter
    **/
   public BloomFilter clone() throws CloneNotSupportedException {
     return (BloomFilter) super.clone();
   }

   /**
    * Generate a unique hash representing the filter
    **/
   public int hashCode() {
     return hashes.hashCode() ^ k;
   }

   /**
    * Test if the filters have equal bitsets.
    * WARNING: two filters may contain the same elements, but not be equal
    * (if the filters have different size for example).
    */
   public boolean equals(BloomFilter other) {
     return this.hashes.equals(other.hashes) && this.k == other.k;
   }

   /**
    * Merge another bloom filter into the current one.
    * After this operation, the current bloom filter contains all elements in
    * other.
    **/
   public void merge(BloomFilter other) {
     if (other.k != this.k || other.hashes.size() != this.hashes.size()) {
       throw new IllegalArgumentException("Incompatible bloom filters");
     }
     this.hashes.or(other.hashes);
   }

   private class RandomInRange
       implements Iterable<RandomInRange>, Iterator<RandomInRange> {

     private Random prng;
     private int max; // Maximum value returned + 1
     private int count; // Number of random elements to generate
     private int i = 0; // Number of elements generated
     public int value; // The current value

     RandomInRange(int maximum, int k) {
       max = maximum;
       count = k;
       prng = new Random();
     }
     public void init(Object o) {
       prng.setSeed(o.hashCode());
     }
     public Iterator<RandomInRange> iterator() {
       i = 0;
       return this;
     }
     public RandomInRange next() {
       i++;
       value = prng.nextInt() % max;
       if (value<0) value = -value;
       return this;
     }
     public boolean hasNext() {
       return i < count;
     }
     public void remove() {
       throw new UnsupportedOperationException();
     }
   }
 }


LRU Cache

// JavaScript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size >= this.capacity) {
        // Map 中新 set 的元素会放在后面
        let firstKey = this.cache.keys().next();
        this.cache.delete(firstKey.value);
      }
    }
    this.cache.set(key, value);
  }
}


/**
 * 使用 哈希表 + 双端链表 实现
 */
class LinkedNode {
  constructor(key = 0, val = 0) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = new LinkedNode()
    this.tail = new LinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }


  insertFirst(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
  }


  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }


  removeLast() {
    if (this.tail.prev === this.head) return null
    let last = this.tail.prev
    this.remove(last)
    return last
  }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.keyNodeMap = new Map()
  this.cacheLink = new LinkedList()
};


/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.keyNodeMap.has(key)) return -1
  let val = this.keyNodeMap.get(key).val
  this.put(key, val)
  return val
};


/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let size = this.keyNodeMap.size
  if (this.keyNodeMap.has(key)) {
    this.cacheLink.remove(this.keyNodeMap.get(key));
    --size
  }
  if (size >= this.capacity) {
    this.keyNodeMap.delete(this.cacheLink.removeLast().key)
  }
  let node = new LinkedNode(key, value)
  this.keyNodeMap.set(key, node)
  this.cacheLink.insertFirst(node)
};



排序算法

1.比较类排序
  (comparator)
  通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn),因此也称为非线性时间比较类排序。

1)交换排序
    a.冒泡排序
    b.快速排序

2)插入排序
    a.简单插入排序
    b.希尔排序

3)选择排序
    a.简单选择排序
    b.堆排序

4)归并排序
    a.二路归并排序
    b.多路归并排序

2.非比较类排序
  不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也成为线性时间非比较类排序。

1)计数排序(Counting Sort)

2)桶排序(Bucket Sort)

3)基数排序(Radix Sort)



Shell's Sort 时间复杂度 O(n^（1.3—2）)

初级排序 - O(n^2)

1.选择排序 2.插入排序 3.冒泡排序

高级排序 - O(N*LogN)

1.快速排序

2.归并排序 (可以理解成快排的逆向操作)

归并和快排具有相似性，但步骤顺序相反

归并：先排序左右子数组，然后合并两个有序子数组

快排：先调配出左右子数组，然后对于左右子数组进行排序
