import java.util.Scanner;

public class SmallestElement {
    static int[] SmallElement(int arr[]){
        //assume first element is smallest and compare to all others O(n^2)
        int smallest = arr[0];
        int smallest_index = 0;
        for(int i=1;i<arr.length;i++){
            if(arr[i]<smallest){
                smallest = arr[i];
                smallest_index = i;
            }
        }
        return new int[]{smallest, smallest_index};
    }

    public static void main(String args[]) {
        System.out.println("Enter the size of array of characters");
        Scanner s = new Scanner(System.in);
        int n = (int) (s.nextInt());
        int arr[] = new int[n];
        System.out.println("Enter the array");
        for (int i = 0; i < n; i++) {
            arr[i] = (int) s.nextInt();
        }

        int smallest[] = SmallElement(arr);
        System.out.println("The smallest element is "+smallest[0]+" at position "+smallest[1]);
    }
}
