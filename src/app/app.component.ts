import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Catálogo de Filmes';
  filmes = [
    { 
      nome: 'Nina: A Heroína dos Sete Mares',
      categoria: 'Aventura',
      descricao: 'Nina é uma ratinha aventureira que sonha em se tornar uma grande heroína. Ao lado de seu fiel companheiro, o gato Sam, ela decide ajudar o velho herói Jasão e seus soldados a salvar a cidade de Yolcos da fúria de Poseidon. Mesmo que todos ao seu redor duvidem dela, Nina está decidida a provar que tem coragem de sobra para embarcar nesta missão pelos 7 mares e proteger a sua cidade.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164097_000_m.jpg'
    },
    { 
      nome: 'Emily',
      categoria: 'Biografia',
      descricao: 'O mundo quer que ela seja quieta e obediente, mas Emily Brontë (Emma Mackey) tem uma imaginação forte e uma voz que anseia por ser ouvida. Enquanto se recusa a fazer o que esperam dela, Emily vive um amor doloroso e proibido com Weightman (Oliver Jackson-Cohen) e mostra que pode até ser estranha e rebelde, mas é também genial. A história da mente por trás de ‘O Morro dos Ventos Uivantes’, um dos maiores clássicos da literatura mundial.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164082_000_m.jpg'
    },
    { 
      nome: 'O Chamado do Mal',
      categoria: 'Terror',
      descricao: 'Quando Adam (Josh Stewart) aceita um emprego como professor universitário, ele e sua esposa grávida, Lisa (Bojana Novakovic), se mudam para um novo lar nos arredores da cidade. Tudo parece perfeito, até que Lisa sofre um aborto em circunstâncias misteriosas. ​Agora, ​ela se vê assombrada por uma entidade maligna que começa a atormentar sua vida, fazendo-a questionar sua sanidade. Lisa terá que lutar contra a razão para encontrar respostas e descobrir o que aconteceu com seu bebê.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164752_000_m.jpg'
    },
    { 
      nome: 'O Culto',
      categoria: 'Suspense',
      descricao: 'Dois irmãos, Justin ​(Justin Benson) ​e Aaron​ (Aaron Moorhead) ​foram criados ​numa seita religiosa do qual fugiram quando Justin ​percebeu ​a​ possibilidade da ocorrência de um suicídio em massa. Dez anos depois​ ​​eles ​recebem ​uma mensagem bastante enigmática​. Nela, um membro ​desta comunidade fala de uma ascensão iminente,​ e então​ eles ​resolvem regressar ao local onde eram realizados os cultos em busca de respostas. ​Mas, ao chegarem​, ​descobrem que o ‘culto’ pode afinal não ser o que pensavam e começam a duvidar, inclusive, se serão bem-vindos.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164782_000_m.jpg'
    },
    { 
      nome: 'Antes Que Eu Me Esqueça',
      categoria: 'Comédia',
      descricao: 'Aos 80 anos, Polidoro (José de Abreu) decide acabar com a estabilidade de sua confortável vida de juiz viúvo aposentado tornando-se sócio de uma boate de strip-tease. Diante de tal situação, sua filha Beatriz (Letícia Isnard) decide interditá-lo judicialmente. Em audiência, Paulo (Danton Mello) se declara incapaz de opinar sobre as decisões do pai porque não fala com ele há anos. O juiz determina que seja feita uma avaliação de Polidoro por Paulo, em encontros regulares entre pai e filho, forçando uma reaproximação que transformará suas vidas.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164565_000_m.jpg'
    },
    { 
      nome: 'A Vingança está na Moda',
      categoria: 'Drama',
      descricao: 'Tilly Dunnage (Kate Winslet) fugiu da cidade rural em que vivia na Austrália depois de ser acusada de ter se envolvido em um assassinato. Ela parte para a Europa e lá conquista fama e reconhecimento por seu trabalho na alta costura. ',
      imagem: 'https://capas-m.imagemfilmes.com.br/164444_000_m.jpg'
    },
    { 
      nome: 'Norm e os Invencíveis',
      categoria: 'Animação',
      descricao: 'Norm e os Invencíveis conta a história de Norm, um urso polar que aprendeu a falar a língua dos humanos e por isso é deixado de lado pelos outros ursos. Quando as pessoas começam a visitar o ártico para fazer turismo, o ecossistema da região é colocado em risco. Então, Norm decide embarcar junto com seus amigos lemingues em uma grande aventura com o objetivo de alertar a população sobre os perigos da atividade humana no ártico. ',
      imagem: 'https://capas-m.imagemfilmes.com.br/164522_000_m.jpg'
    },
    { 
      nome: 'Teia de Mentiras',
      categoria: 'Policial',
      descricao: 'Para reconquistar tudo que perdeu, a ex-promotora Cate luta para defender uma mulher condenada injustamente por assassinato. Com sua vida em risco, sua única chance de recuperar a credibilidade e a guarda de sua filha será desfazer uma teia de mentiras, enfrentar policiais corruptos, um sistema falho e seus próprios demônios.',
      imagem: 'https://capas-m.imagemfilmes.com.br/164315_000_m.jpg'
    },
    { 
      nome: 'Amor Profundo',
      categoria: 'Romance',
      descricao: 'Hester Collyer (Rachel Weisz) é a esposa de um juiz do Estado muito importante e influente, Sir William Collyer (Simon Russell Beale). Seu casamento tem afeto, mas morno. Hester envolve-se com um piloto aéreo (Tom Hiddleston) perturbado por suas experiências durante a guerra, em uma relação bem mais excitante. Quando os dois são descobertos, e uma tentativa de suicidio, Hester começa a questionar se todas as suas escolhas, foram corretas.',
      imagem: 'https://capas-m.imagemfilmes.com.br/103877_000_m.jpg'
    },
    { 
      nome: 'Estamos Juntos',
      categoria: 'Drama',
      descricao: 'Para a jovem médica Carmen (Leandra Leal), o mundo começava a moldar-se conforme seus planos. Uma vida independente na agitada São Paulo, ao lado de seu amigo DJ (Cauã Reymond), uma aventura amorosa com um impetuoso músico argentino (Nazareno Casero) e uma relação de intimidade com um enigmático homem (Lee Taylor). Mas, sintomas de uma doença grave surgem na rotina desta médica residente e sua vida se transforma, para sempre.',
      imagem: 'https://capas-m.imagemfilmes.com.br/103350_000_m.jpg'
    },

  ];

  categoriaSelecionada = '';
  filmesFiltrados = this.filmes;

  filtrarFilmes() {
    this.filmesFiltrados = this.filmes.filter(filme =>
      this.categoriaSelecionada ? filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase() : true
    );
  }
}
