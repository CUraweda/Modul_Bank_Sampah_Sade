import axios, { AxiosPromise } from "axios";
const instance = axios.create({ baseURL: import.meta.env.VITE_REACT_API_URL });
import {
  LoginResponse,
  JenisSampah,
  GetSiswaByNis,
  GetInclassStudent,
  GetClass,
  CreateRekapSampah,
  GetAllClass,
  CreateJenisSampah,
  penjualanSampah,
  WasteCollectionResponse,
  WasteTypeDropdownResponse,
  ClassDropdownResponse,
  DataPetugasResponse,
  // DataPetugasDropdownResponse,
} from "./Utils";

const Auth = {
  Login: (
    email: string | null,
    password: string | null
  ): AxiosPromise<LoginResponse> =>
    instance({
      method: "POST",
      url: "/auth/login",
      data: {
        email,
        password,
      },
    }),
};

const DaftarDataPetugas = {
  GetDataPetugas: (
    token: string | null,
    date: string
  ): AxiosPromise<DataPetugasResponse> =>
    instance({
      method: "GET",
      url: `/waste-officer/get-by-date/date=${date}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  PosDataPetugas: (token: string | null, data: any): AxiosPromise<any> =>
    instance({
      method: "POST",
      url: `/waste-officer/create`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  UpdateDataPetugas: (
    token: string | null,
    id: number,
    data: any
  ): AxiosPromise<any> =>
    instance({
      method: "PUT",
      url: `/waste-officer/update/${id}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  DeleteDataPetugas: (token: string | null, id: number): AxiosPromise<any> =>
    instance({
      method: "DELETE",
      url: `/waste-officer/delete/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  // GetDataPetugasDropdown: (
  //   token: string | null
  // ): AxiosPromise<DataPetugasDropdownResponse> =>
  //   instance({
  //     method: "GET",
  //     url: `/student?limit=100000`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }),

  GetDataPetugasDropdown: (token: string | null, id: any): AxiosPromise<any> =>
    instance({
      method: "GET",
      url: `/student-class/show-by-class/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetAllDataPetugas: (
    token: string | null,
    date: string | null,
    iteration: string | null,
    class_id: string | null
  ): AxiosPromise<DataPetugasResponse> =>
    instance({
      method: "GET",
      url: `/waste-officer?date=${date}&iteration=${iteration}&class_id=${class_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

const BankSampah = {
  GetPenjualanSampah: (
    token: string | null,
    page: number,
    limit: number,
    sortField: any,
    jenis: string,
    sortOrder: any,
    startDate: string,
    endDate: string
  ): AxiosPromise<penjualanSampah> =>
    instance({
      method: "GET",
      url: `/waste-sales/?wastetype_id=${jenis}&start_date=${startDate}&end_date=${endDate}&page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  GetDataDropdownWasteType: (
    token: string | null
  ): AxiosPromise<WasteTypeDropdownResponse> =>
    instance({
      method: "GET",
      url: `/waste-type?limit=10000`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  GetRekapBankSampah: (
    token: string | null,
    wasteId: string,
    classId: string,
    fromDate: string,
    toDate: string
  ): AxiosPromise<WasteCollectionResponse> =>
    instance({
      method: "GET",
      url: `/waste-collection/get-by-filter?waste_type_id=${wasteId}&class_id=${classId}&start_date=${fromDate}&end_date=${toDate}&limit=100000000`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetDataDropdownClass: (
    token: string | null
  ): AxiosPromise<ClassDropdownResponse> =>
    instance({
      method: "GET",
      url: `/classes?limit=100&is_active=Y`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetJenisSampah: (
    token: string | null,
    page: string,
    limit: string
  ): AxiosPromise<JenisSampah> =>
    instance({
      method: "GET",
      url: `/waste-type?search_query=&page=${page}&limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createRekapSampah: (
    token: string | null,
    data: CreateRekapSampah
  ): AxiosPromise<any> =>
    instance({
      method: "POST",
      url: `/waste-collection/create`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    }),

  createJenisSampah: (
    token: string | null,
    data: CreateJenisSampah
  ): AxiosPromise<any> =>
    instance({
      method: "POST",
      url: `/waste-type/create`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    }),
  updateJenisSampah: (
    token: string | null,
    id: string | null,
    data: CreateJenisSampah
  ): AxiosPromise<any> =>
    instance({
      method: "PUT",
      url: `/waste-type/update/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    }),
  getByIdJenisSampah: (
    token: string | null,
    id: string | null
  ): AxiosPromise<any> =>
    instance({
      method: "GET",
      url: `/waste-type/show/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteJenisSampah: (
    token: string | null,
    id: string | null
  ): AxiosPromise<any> =>
    instance({
      method: "DELETE",
      url: `/waste-type/delete/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

const ApiSiswa = {
  GetSiswaByNis: (
    token: string | null,
    nis: string | number | null
  ): AxiosPromise<GetSiswaByNis> =>
    instance({
      method: "GET",
      url: `/student/show-nis/${nis}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetInClassSiswaByid: (
    token: string | null,
    id: string | number | null
  ): AxiosPromise<GetInclassStudent> =>
    instance({
      method: "GET",
      url: `/student-class/show-by-student/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetClassSiswaByid: (
    token: string | null,
    id: string | number | null
  ): AxiosPromise<GetClass> =>
    instance({
      method: "GET",
      url: `/classes/show/${id}?is_active=Y`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  GetSiswaByClass: (
    token: string | null,
    kelas: string | null,
    akademik: string
  ): AxiosPromise<GetInclassStudent> =>
    instance({
      method: "GET",
      url: `/student-class/show-by-class/${kelas}?academic=${akademik}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

const Kelas = {
  GetAllKelas: (token: string | null): AxiosPromise<GetAllClass> =>
    instance({
      method: "GET",
      url: `/classes?search_query=&page=0&limit=1000`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

const DashboardAdmin = {
  getCards: (token: string | null): AxiosPromise<any> =>
    instance({
      method: "GET",
      url: `/dashboard/admin-timbangan`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getChart: (
    token: string | null,
    startDate: string | null,
    endDate: string | null,
    classId: string | null
  ): AxiosPromise<any> =>
    instance({
      method: "GET",
      url: `/dashboard/chart?start_date=${startDate}&end_date=${endDate}&class_id=${classId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getChartByWaste: (
    token: string | null,
    wasteTypeId: string | null,
    startDate: string | null,
    endDate: string | null,
    classId: string | null
  ): AxiosPromise<any> =>
    instance({
      method: "GET",
      url: `/dashboard/detail-chart?waste_type_id=${wasteTypeId}&start_date=${startDate}&end_date=${endDate}&class_id=${classId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export { Auth, BankSampah, ApiSiswa, Kelas, DaftarDataPetugas, DashboardAdmin };
