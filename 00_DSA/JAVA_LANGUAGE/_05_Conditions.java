import java.util.Scanner;

public class _05_Conditions {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // Conditions

        // 1) If (){}
        int valueIf = scan.nextInt();
        if(valueIf > 0) System.out.println("Positive");

        // 2) If else (){}
        int valueIfElse = scan.nextInt();
        if(valueIfElse > 0) System.out.println("Positive");
        else System.out.println("Negative");

        // 3) If else if else (){}
        int valueIfElseIfElse = scan.nextInt();
        if(valueIfElseIfElse > 0) System.out.println("Positive");
        else if(valueIfElseIfElse < 0)System.out.println("Negative");
        else System.out.println("Zero");

        // 4) If else if (){}
        // 5) If else if else if else if ….else (){}

    }
}
