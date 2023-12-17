import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
public class _02_DataTypes {
    public static void main(String[] args) {
        // Primitive data types is something that you cannot be broken down even more:

        // Number
        byte myByte = 100;
        // No Arithmetic operation can be performed on a byte data type.
        short myShort = 2000;
        int myInt = 100000;
        long myLong = 1000000000L; // Note the 'L' to indicate a long literal
        float myFloat = 3.14f; // Note the 'f' to indicate a float literal
        double myDouble = 3.14159265359;

        char myChar = 'A';

        boolean isJavaFun = true;

        // Reference Data Types:

        // String
        String myString = "Hello, Java!";

        // Array
        int[] numbers = {1, 2, 3, 4, 5};

        // Class
        class Person {
            String name;
            int age;
            // Constructor and methods here
        }
        Person person1 = new Person();
        person1.name = "Alice";
        person1.age = 30;

        // ArrayList
        // import java.util.ArrayList;
        ArrayList<String> names = new ArrayList<>();
        names.add("John");
        names.add("Mary");

        // HashMap
        // import java.util.HashMap;
        HashMap<String, Integer> ageMap = new HashMap<>();
        ageMap.put("John", 25);
        ageMap.put("Mary", 28);

        // Hashset
        // import java.util.HashSet;
        HashSet<Integer> uniqueNumbers = new HashSet<>();
        uniqueNumbers.add(1);
        uniqueNumbers.add(2);
        uniqueNumbers.add(1); // Won't add a duplicate

        // Java follows the Unicode values which allows us to type any language inside it.
        System.out.println("ಹಲೋ ವರ್ಲ್ಡ್");
    }
}
