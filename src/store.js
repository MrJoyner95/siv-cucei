import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tipoUsuario: 'null',
    correo: 'null',
    // Profesor:

    // ++++++++++++++++++++++++++++++++ Login ++++++++++++++++++++++++++++++++
    trabajador: null,
    // trabajador: {
    //   codigo: null,
    //   tipo: null,
    //   nombre: null,
    //   plazaLaboral: null,
    //   areaAdscripcion: null,
    //   token: null
    // },

    comisionActiva: null,
    // comisionActiva: {
    //   folio: null,
    //   fechaCreacion: null,
    //   fechaEnvio: null,
    //   fechaAprobacion: null,
    //   estatus: null,
    //   codigoTrabajador: null,
    //   nombreSolicitante: null,
    //   areaAdscripcion: null,
    //   tipo: null,
    //   destino: null,
    //   plazaLaboral: null,
    //   justificacion: null,
    //   programaTrabajo: null,
    //   objetivoTrabajo: null,
    //   evento: null,
    //   programa: null,
    //   invitacionEvento: null,
    //   programaEvento: null
    // },

    historialComisiones: null,

  },
  // Se usa para funciones con los atributos:
  getters: {

  },
  // Se usa para modificar atributos del state:
  mutations: {
    
    // ++++++++++++++++++++++++++++++++ Login ++++++++++++++++++++++++++++++++
    establecerTrabajador(state, payload){

      state.trabajador = payload.trabajador;
      // state.trabajador.codigo = payload.codigo;
      // state.trabajador.tipo = payload.tipo;
      // state.trabajador.nombre = payload.nombre;
      // state.trabajador.plazaLaboral = payload.plazaLaboral;
      // state.trabajador.areaAdscripcion = payload.areaAdscripcion;
      // state.trabajador.token = payload.token;
    },

    establecerComisionActiva(state, payload){

      state.comisionActiva = payload.comisionActiva;
      // state.comisionActiva.folio              = payload.folio;
      // state.comisionActiva.fechaCreacion      = payload.fechaCreacion;
      // state.comisionActiva.fechaEnvio         = payload.fechaEnvio;
      // state.comisionActiva.fechaAprobacion    = payload.fechaAprobacion;
      // state.comisionActiva.estatus            = payload.estatus;
      // state.comisionActiva.codigoTrabajador   = payload.codigoTrabajador;
      // state.comisionActiva.nombreSolicitante  = payload.nombreSolicitante;
      // state.comisionActiva.areaAdscripcion    = payload.areaAdscripcion;
      // state.comisionActiva.tipo               = payload.tipo;
      // state.comisionActiva.destino            = payload.destino;
      // state.comisionActiva.plazaLaboral       = payload.plazaLaboral;
      // state.comisionActiva.justificacion      = payload.justificacion;
      // state.comisionActiva.programaTrabajo    = payload.programaTrabajo;
      // state.comisionActiva.objetivoTrabajo    = payload.objetivoTrabajo;
      // state.comisionActiva.evento             = payload.evento;
      // state.comisionActiva.programa           = payload.programa;
      // state.comisionActiva.invitacionEvento   = payload.invitacionEvento;
      // state.comisionActiva.programaEvento     = payload.programaEvento;
    },

    establecerHistorialComisiones(state, payload){
      state.historialComisiones = payload.historialComisiones;
    },

  },
  actions: {

  }
})
