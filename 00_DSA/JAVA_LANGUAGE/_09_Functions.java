import java.util.Scanner;
public class _09_Functions {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println(add(scan.nextInt(), scan.nextInt()));
    }

    static int add(int a,int b) {
        return  a+b;
    }
}
