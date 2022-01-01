
public class BinarySearch {
	public static int search(int[] arr, int searchKey){
		if(arr.length==0){
			return -1;
		}
		int first=0;
		int last=arr.length-1;
		int mid = (first+last)/2;
		while(first<=last){
			if(arr[mid] < searchKey){
				first = mid+1;
			}
			else if(arr[mid] == searchKey){
				return mid;
			}
			else{
				last = mid-1;
			}
			mid=(first+last)/2;
		}
		return -1;
	}
	public static void main(String args[]){
		System.out.println(search(new int[]{1, 2, 5, 10, 12, 21}, 5));
	}
}

