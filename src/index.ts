import PasseioModel from "./model/passeio-model";
import CarroModel from "./model/carro-model";


var chevette = new PasseioModel(1, 1986, "KKK-3333", '2398409238424', 5000, 'GM', 'Chevete 1.6 Alcool', 'Sedan', 5);

//Aqui estou comprando um chevette
chevette.comprar();

//Aqui estou dirigindo um chevette
//Método da classe CarroModel
chevette.dirigir();

//Aqui estou dirigindo um chevette
//Método da classe CarroModel
chevette.vender();

var carro: CarroModel;

carro = chevette;

carro.modelo = 'Corvette'; 

carro.dirigir();