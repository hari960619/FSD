public class _03_Typecasting {
    public static void main(String[] args) {
        // 1) The two values should be compatibles i.e.; both should be numbers. One cannot be char and another cannot be number.
        // 2) The destination data types should be greater than the source type.
        // 3) When you reverse the process, it is called as narrowing conversion.

        int a = 4;
        float b = (float) a;
        System.out.println(b);

        int c = 257;
        byte d = (byte) c;
        System.out.println(d);
        // In the above situation the byte can store a maximum of 256, when 257 was given it took a modulus of the num i.e., 257 % 256 = 1, and printed the output.

        byte e = 20;
        byte f = 30;
        int g = e*f;
        System.out.println(g);

        // In the above situation even though the max value of the byte is 256 and cannot store more than 256 it was able to multiply 50 and 20 because of the help from the destination data type.
        // Java automatically promoted this byte values and then printed them as integer values.
        // If "g" was also a byte it would have thrown an error.

        // Rules of Type Promotion:
        /*1) All the byte, short and char values are promoted to integer values.
        2) If any one of operand is long then the whole operation is promoted to long.
        3) If any one of operand is float then the whole operation is promoted to float.
        4) If any one of operand is double then the whole operation is promoted to double*/

        byte h = 42;
        char i = 'h';
        short j = 1024;
        int k = 50000;
        float l = 5.67f;
        long m = 123455L;
        double n = 0.1223;

        double result = (h * i) + k + j - (l * m / n);
        // Here char "i" also gets converted into a double value i.e.,
        System.out.println((double) i);
        System.out.println((float) i);
        System.out.println((int) i);

        System.out.println(result);

    }
}
