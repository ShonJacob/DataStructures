import java.util.Scanner;

public class FactorialRecursion {
    static int RecursionFunc(int num){
        int fact = 1;
        if(num>1){
             fact =  num*RecursionFunc(num-1);
        }
        return fact;
    }
    int factTotal;
    static int TailRecursionFunc(int factTotal, int num){
        //A recursive function is tail recursive when recursive call is the last thing executed by the function.
       if(num==0){
           return factTotal;
       }
       return TailRecursionFunc(factTotal*num, num-1);
    }

    public static void main(String args[]){
        System.out.println("Enter the number for the factorial");
        Scanner s = new Scanner(System.in);
        int num = s.nextInt();
        int res1 = RecursionFunc(num);
        System.out.println("RecursionFact = " + res1);
        int res2 = TailRecursionFunc(1, num);
        System.out.println("TailRecursionFact = " + res2);
    }
}
