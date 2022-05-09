import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface prescriptionRegisterState {
  userEmail: string,
  medicationName: string,
  pharmacyName: string,
  hospitalName: string,
  prescriptionDate: string
}

const initialState: prescriptionRegisterState = {
  userEmail: '',
  medicationName: '',
  pharmacyName: '',
  hospitalName: '',
  prescriptionDate: ''
};

export const prescriptionRegisterSlice = createSlice({
  name: 'prescriptionRegister',
  initialState,
  reducers: {
    setMedicationName: (state, action: PayloadAction<string>) => {
      state.medicationName = action.payload;
    },
    setPharmacyName: (state, action: PayloadAction<string>) => {
      state.pharmacyName = action.payload;
    },
    setHospitalName: (state, action: PayloadAction<string>) => {
      state.hospitalName = action.payload;
    },
    setPrescriptionDate: (state, action: PayloadAction<string>) => {
      state.prescriptionDate = action.payload;
    },
  },
});

export const { setMedicationName, setPharmacyName, setHospitalName, setPrescriptionDate } = prescriptionRegisterSlice.actions;
export default prescriptionRegisterSlice.reducer;
