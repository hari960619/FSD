import java.util.Scanner;

public class _04_Input_Output {
    public static void main(String[] args) {
        // Create an object of the Scanner class.
        Scanner scan = new Scanner(System.in);

        // nextLine()
        String nextLine = scan.nextLine();

        // nextInt()
        int nextInt = scan.nextInt();

        // nextDouble()
        double nextDouble = scan.nextDouble();

        // nextLong()
        long nextLong = scan.nextLong();
        // NO NEED TO WRITE L WHILE PROVIDING VALUE IN THE TERMINAL.

        // next()
        String nextString = scan.next();

        System.out.println(nextLine);   // "Hello World"
        System.out.println(nextInt);    // 1234
        System.out.println(nextDouble); // 4567.89
        System.out.println(nextLong);   // 3456781200
        System.out.println(nextString); // Harish

        // Trap : Putting nextLine() after nextInt() ,nextDouble() ,nextLong() or next() .
        // nextLine () is wasted by reading an empty line.
        // Solution: add a throwaway nextLine() before the real nextLine() .

    }
}
