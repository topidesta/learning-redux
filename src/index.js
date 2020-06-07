import storeFactory from "./store";
import {
  addError,
  clearError,
  changeSuggestions,
  clearSuggestions,
} from "./actions";

const store = storeFactory();

// build addError() action creator
store.dispatch(addError("ada yang gak beres"));
// expect(store.getState().errors).toEqual(["ada yang gak beres"]);

console.log(`
  addError() action creator berhasil!
`);

// build clearError() action creator
store.dispatch(clearError(0));

console.log(`
  clearError() action creator berhasil!
`);

// build changeSuggestions() action creator
store.dispatch(changeSuggestions(["satu", "dua", "tiga"]));

console.log(`
  changeSuggestions() action creator berhasil!
`);

// build clearSuggestions() action creator
store.dispatch(clearSuggestions());

console.log(`
  clearSuggestion() action creator berhasil!
`);
