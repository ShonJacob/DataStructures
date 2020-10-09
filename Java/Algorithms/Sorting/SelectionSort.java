import java.util.Scanner;

public class SelectionSort {
    static int[] SelectionSorted(int arr[]){
        //find the smallest then move it to a different array
        /*This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts,
        the sorted part at the left end and the unsorted part at the right end.
         Initially, the sorted part is empty and the unsorted part is the entire list.

        The smallest element is selected from the unsorted array and swapped with the leftmost element,
        and that element becomes a part of the sorted array.
        This process continues moving unsorted array boundary from one element to the right./
        O(n^2)
         */
        int size = arr.length;
        if(size>1){
            for(int i=0;i<size-1;i++){
                int smallest_num = arr[i];
                for(int j=i+1;j<size;j++){
                    if(arr[j]<smallest_num){
                        smallest_num = arr[j];
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }

            }
            return arr;
        }
        else if(size ==1){
            return arr;
        }
        else
            return new int[]{-1};
    }

    public static void main(String args[]) {
        System.out.println("Enter the size of array of characters to be sorted");
        Scanner s = new Scanner(System.in);
        int n = (int) (s.nextInt());
        int arr[] = new int[n];
        System.out.println("Enter the array");
        for (int i = 0; i < n; i++) {
            arr[i] = (int) s.nextInt();
        }

        int SelectionSortedArr[] = SelectionSorted(arr);
        if(SelectionSortedArr[0] != -1){
            System.out.println("The sorted array is = ");
            for(int i=0;i<SelectionSortedArr.length;i++){
                System.out.println(SelectionSortedArr[i]);
            }
        }
        else
            System.out.println("The array is empty");

    }
}
