public class _08_Strings {
    public static void main(String[] args) {
        String a = "Harish S";
        String b = "Harish S";

        // String values are compared using '==', not 'equals()'
        // (a==b)  Here java checks the whether these reference variables are pointing towards the same object in the heap.

        System.out.println(a.equals(b));    // true
    }
}
