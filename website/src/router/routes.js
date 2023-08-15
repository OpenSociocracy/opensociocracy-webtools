const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }]
  },

  {
    path: "/canvas",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Canvas",
      app: "Logbook"
    },
    children: [
      {
        name: "canvases",
        path: "",
        component: () => import("pages/CanvasPage.vue")
      }
    ]
  },
  {
    path: "/canvas/:canvasName",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Canvas",
      app: "Logbook"
    },
    children: [
      {
        name: "canvasPage",
        path: "",
        component: () => import("pages/CanvasPage.vue")
      }
    ]
  },
  {
    path: "/circles",
    meta: {
      drawer: "Circle"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/CirclesPage.vue") }
    ]
  },
  {
    path: "/circles/visualization",
    meta: {
      drawer: "Circle"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/D3ForceBasedPage.vue") }
    ]
  },
  {
    path: "/circles/org-chart-alt",
    meta: {
      drawer: "Circle"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/OrgChartPage.vue") }]
  },
  {
    path: "/circles/org-chart",
    meta: {
      drawer: "Circle"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/OrgChartAltPage.vue") }
    ]
  },
  {
    path: "/circles/diagram",
    meta: {
      drawer: "Circle"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/D3ForceDirectedPage.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
