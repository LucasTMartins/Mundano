// AVISO: ESSA PARTE ESTÁ PROVISÓRIAMENTE PROJETADA PARA APENAS UMA ENTIDADE!
//        EM FUTURAS ATUALIZAÇÕES ISSO SERÁ COMPLETAMENTE ALTERADO PARA CAPACIDADE DE MÚLTIPLAS ENTIDADES!
class CacheService {
    saveCharacter(character: any) {
        localStorage.setItem('character', JSON.stringify(character));
    }

    getCharacter(): any {
        const characterJSON = localStorage.getItem('character');
        return characterJSON ? JSON.parse(characterJSON) : null;
    }
}

// Exemplo de uso
const cacheService = new CacheService();

// Salvando um personagem
const character = { name: 'Fulano', level: 10 };
cacheService.saveCharacter(character);

// Obtendo o personagem
const savedCharacter = cacheService.getCharacter();
console.log(savedCharacter);

