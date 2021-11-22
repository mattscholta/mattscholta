import { GraphQLClient } from 'graphql-request';

const url = `https://api-us-west-2.graphcms.com/v2/ckwa5lj8s1yxg01z2g6369g4c/master`;
const headers = {
  Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzc2MTkxMjYsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2Nrd2E1bGo4czF5eGcwMXoyZzYzNjlnNGMvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmI2OTMtMjAwMC00NWFkLWJlM2YtZjkwYjYzNDZiNTU0IiwianRpIjoiY2t3Yjg1OHZnMzZuZTAxeHEzN21uZ2s2ZSJ9.a12bq94X2hXMk4bfckt2EnJ6LaXEoaHxBYC2HtPKF4bB-UBe0yRDYrfOTX6EOkWQOXMVcQmeLwCymhCn3SvdXauASpcXgPf0g3GkFbgvREXOrXuds1M5Ea7k9NrmKmmHebprKt2HHxRPEprcXkx4T-4W10mqvQfwfTY9kU9AFlcWlWYZ9MtVIV4ziqyd1ZTuhFw3J9yY7w5ucbNomqetZJavN7--O1POaMgOEiqOmGxKzlkXqEW45znf5KPw8bfkEmC3J3AT8i4b_nUfbFC32RixnbZRYJWDDKV6v51rRXb4ytatADKFYmzVfuU7FqgMjzC40VYyrge9E_akV1V2JBqhlUgdjgaPrRc_FgfiZu9EdJULK1Q0oUPi_fBlXS1ZDUhLEfnrAk5hknMTcGUPPz9YHH3WN1Bxajv-2cDEIiAYl3Iufm_PajEAl8O9xXoa_7shoiSQlhPEeXVMityRN19Mtg42K22KAsdZwNDSKg7FssOegspISjkNaxJhFmsFVnWLLIILfZ1-ABRyCC34g3s1nKvdFa_ey1SNsEix5FZk5hPRdg71Asd0hmzqiKI2am2880_WQTpqodZfwH916mID6-k4iyjuNhxY2pZ7d2kZVoGG660OkeecS0xSTA3R3HxZj3P78OZBMGNQ9STDyokTzG10cZYyI6suoUwdnp4`
};

export const graphcms = new GraphQLClient(url, {
  headers
});
