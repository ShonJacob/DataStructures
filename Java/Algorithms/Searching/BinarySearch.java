import java.util.Scanner;

public class BinarySearch {
    static int BinarySearchAlgo(int[] arr, int x){
            //find the middle element and adjust top or bot accordingly O(log n)
            int bot = 0;
            int top = arr.length-1;
            while(bot<=top){
                int middle = (int)bot+top/2;
                //System.out.println("middle = " + middle);
                if(arr[middle]<x){
                    bot = middle+1;
                    //System.out.println("bot = " + bot);
                }
                else if(arr[middle]>x){
                    top = middle-1;
                    //System.out.println("top = " + top);
                }
                else if(arr[middle] == x){
                    return middle;
                }
            }
            return -1;
    }

    public static void main(String args[]){
        System.out.println("int arr");
        int arr[] = {1,2,4,7,10,14,21,30,50,60,65,67,99,101};
        int pos = BinarySearchAlgo(arr, 10);
        if(pos != -1){
            System.out.println("The element is at pos = " + pos);
        }
        else
        {
            System.out.println("Element not found");
        }
    }
}
