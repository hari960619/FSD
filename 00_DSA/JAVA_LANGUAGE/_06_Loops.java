public class _06_Loops {
    public static void main(String[] args) {
        // for loop
        System.out.println("for:");
        for(int i=0;i<5;i++) System.out.println(i);

        // while loop
        int i = 8;
        System.out.println("while:");
        while(i >= 5){
            System.out.println(i);
            i--;
        }

        // do-while loop
        int j = 10;
        System.out.println("do-while:");
        do{
            System.out.println(j);
            j--;
        }while (j<0);
    }
}
