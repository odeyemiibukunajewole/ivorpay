// Question 1 - Algorithm
// There is a large pile of socks that must be paired by color. Given an array of integers
// representing the color of each sock, determine how many pairs of socks with matching colors
// there are.

// Example
// There is one pair of color and one of color. There are three odd socks left, one of each color.
// The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// ● int n: the number of socks in the pile
// ● int ar[n]: the colors of each sock
// Returns
// ● int: the number of pairs
// Input Format
// The first line contains an integer , the number of socks represented in .
// The second line contains space-separated integers, , the colors of the socks in the pile.
// Constraints
// ● 1 <= n <= 100
// ● 1 <= ar[i] <= 100 where 0 <= i < n
// Sample Input - sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
// n = 9
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output
// 3

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchantTyped (n:number,arr:number[]):number{
  const unique_sock = new Set(arr);
  const unique_arr= Array.from(unique_sock);
   arr.sort((a, b) => {
    return a - b;
  })
  
  let pair = 0;
  
  for (let i = 0; i < unique_arr.length; i++) {
    const sock = unique_arr[i];
    const lastIndex = arr.lastIndexOf(sock);
    const pair_count = Math.floor((lastIndex + 1) / 2);
    arr.splice(0,lastIndex+1)
    
    if (pair_count >= 1) {
      pair += pair_count;
    }
  }
  return pair
}


sockMerchantTyped(arr.length,arr)

