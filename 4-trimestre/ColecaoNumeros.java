
import java.util.ArrayList;
import java.util.Scanner;

public class ColecaoNumeros {

    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();

        try (
                Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite números inteiros para adicionar à lista (ou digite '0' para finalizar):");
            int numero;
            do {
                System.out.print("Número: ");
                numero = scanner.nextInt();

                if (numero != 0) {
                    numeros.add(numero);
                }
            } while (numero != 0);
        }

        int somaTotal = 0;

        for (int n : numeros) {
            somaTotal += n;
        }

        System.out.println("Números armazenados: " + numeros);
        System.out.println("Soma total dos números: " + somaTotal);
    }
}
