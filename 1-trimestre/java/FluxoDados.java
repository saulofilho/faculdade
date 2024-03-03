import javax.swing.*;

public class FluxoDados {
    public static void main(String args[]) {
        int n1, n2, div;
        double pot;
        String msg="";

        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro, por favor:"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro, por favor:"));
        
        div = (int)n1 / (int)n2;
        pot = Math.pow(n1, n2);

        msg = msg + "quociente de divisão de " + n1 +  " por " + n2 + " = " + div + "\n";
        msg = msg + "potência de " + n1 +  " por " + n2 + " = " + pot + "\n";

        JOptionPane.showMessageDialog(null, msg);
        System.exit(0);
    }
}
