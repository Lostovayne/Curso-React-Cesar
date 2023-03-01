import { createSlice } from '@reduxjs/toolkit';


// Estado inicial

const initialState = {
  pais: 'Chile',
  ciudad: 'Viña del mar'
};


//Crear el Slice de Redux

export const procedenciaSlice = createSlice({
  name: 'procedencia', // el reducer se llamará procedenciaReducer
  initialState,
  reducers: {
    cambiarMexico: (state) => {
      (state.pais = 'Mexico'), (state.ciudad = 'Ciudad de mexico');
    },

    cambiarVenezuela: (state) => {
      (state.pais = 'Venezuela '), (state.ciudad = 'Caracas');
    },

    volverChile: (state) => {
      (state.pais = 'Chile'), (state.ciudad = 'Viña del mar');
    }
  }
});




export const { cambiarMexico, cambiarVenezuela, volverChile } =
  procedenciaSlice.actions;
export default procedenciaSlice.reducer;

  