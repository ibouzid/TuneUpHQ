import { http, HttpResponse } from "msw";
import { vehicles } from "./data/vehicles";
import { operationsData, overviewData, type DateRange } from "./data/dashboard";

const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  ////////
  //VEHICLE APIS
  ////////
  http.get(`${API_URL}/vehicles`, () => {
    return HttpResponse.json(vehicles);
  }),

  http.get(`${API_URL}/vehicles/:id`, ({ params }) => {
    const vehicle = vehicles.find((v) => v.id === params.id);

    if (!vehicle) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(vehicle);
  }),

  ////////
  //AUTH APIS
  ////////
  http.post(`${API_URL}/auth/login`, async ({ request }) => {
    const body = (await request.json()) as {
      username: string;
      password: string;
    };

    if (
      (body.username === "tamar" || body.username === "Tamar") &&
      body.password === "tenna"
    ) {
      const fakeToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
        "eyJzdWIiOiIxIiwibmFtZSI6Ikl6emVkZGluZSBCb3V6aWQiLCJyb2xlcyI6WyJhZG1pbiJdLCJleHAiOjQ3MzM4NzY0MDB9." +
        "fake-signature";

      return HttpResponse.json({
        user: {
          id: "1",
          name: "Tamar Amit",
          email: "tAmit@tuneuphq.com",
          role: "admin",
        },
        token: fakeToken,
      });
    }

    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }),
  http.post(`${API_URL}/auth/logout`, async () => {
    return new HttpResponse(null, { status: 204 });
  }),

  ////////
  //DASHBOARD APIS
  ////////
  http.get(`${API_URL}/dashboard/overview`, ({ request }) => {
    const dateRange = new URL(request.url).searchParams.get("dateRange");

    const key: DateRange =
      dateRange && dateRange in overviewData
        ? (dateRange as DateRange)
        : "day";

    return HttpResponse.json(overviewData[key]);
  }),

  http.get(`${API_URL}/dashboard/operations`, ({ request }) => {
    const dateRange = new URL(request.url).searchParams.get("dateRange");

    const key: DateRange =
      dateRange && dateRange in operationsData
        ? (dateRange as DateRange)
        : "day";

    return HttpResponse.json(operationsData[key]);
  }),
];
