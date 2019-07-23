class Usuarios {

    constructor(){
        this.personas = [];
    }

    agregarPersona(id,nombre,sala){
      let persona ={ id, nombre,sala};
      this.personas.push(persona);
      return this.personas;
    }

    obtenerPersona(id){
        let persona = this.personas.filter(pers => pers.id ===id )[0];
        return persona;
    }

    obtenerPersonas(){
        return this.personas;
    }

    obtenerPersonasPorSala(sala){
        let personasSala = this.personas.filter(persona => persona.sala === sala);
        return personasSala;
    }

    borrarPersona(id){
        
        let personaborrada= this.obtenerPersona(id);
        
        this.personas = this.personas.filter(persona => {
            return persona.id!=id
        });

        return personaborrada;
    }
}

module.exports = {
    Usuarios
}