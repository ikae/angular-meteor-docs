API_1_3_1 = function (version, basedOnTemplatesOf) {
  var urlBase = '/api/' + version + '/';
  var templatePrefix = basedOnTemplatesOf || version;

  return {
    groups: [
      {
        id: "0",
        title: "",
        route: "api",
        path: urlBase,
        redirectRoute: "/api/" + version + "/reactive",
        template: "api",
        seoTitleSuffix: " | Angular Meteor API",
        seoDesc: "angular-meteor is a realtime full stack that combines the best frameworks. use your existing Angular applications with Meteor - the best backend framework for AngularJS applications.",
        pages: [
          {
            id: "01",
            route: "api." + version + ".reactive",
            path: urlBase + "reactive",
            title: "$reactive",
            seoTitle: "$reactive",
            mdContent: "api." + version + ".reactive"
          },
          {
            id: "02",
            route: "api." + version + ".reactive-context",
            path: urlBase + "reactive-context",
            title: "ReactiveContext",
            seoTitle: "ReactiveContext",
            mdContent: "api." + version + ".reactive-context"
          },
          {
            id: "03",
            route: "api." + version + ".helpers",
            path: urlBase + "helpers",
            title: "Context Helpers",
            seoTitle: "Context Helpers",
            mdContent: "api." + version + ".helpers"
          },
          {
            id: "04",
            route: "api." + version + ".reactive-props",
            path: urlBase + "reactive-props",
            title: "Reactive Properties",
            seoTitle: "Reactive Properties",
            mdContent: "api." + version + ".reactive-props"
          },
          {
            id: "05",
            route: "api." + version + ".subscribe",
            path: urlBase + "subscribe",
            title: "Subscribe",
            seoTitle: "Subscribe",
            mdContent: "api." + version + ".subscribe"
          },
          {
            id: "06",
            route: "api." + version + ".autorun",
            path: urlBase + "autorun",
            title: "Autorun",
            seoTitle: "Autorun",
            mdContent: "api." + version + ".autorun"
          }
        ]
      }
    ]
  }
};