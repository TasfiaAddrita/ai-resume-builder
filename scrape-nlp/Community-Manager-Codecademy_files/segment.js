const fetchDestinationForWriteKey = async writeKey => {
  try {
    const res = await window.fetch(
      `https://cdn.segment.com/v1/projects/${writeKey}/integrations`
    );

    if (!res.ok) return;
    const destinations = await res.json();

    for (const destination of destinations) {
      destination.id = destination.creationName;
      delete destination.creationName;
    }

    return destinations;
  } catch (error) {}
};

const conditionallyLoadAnalytics = ({ writeKey, destinationPreferences }) => {
  if (window.analytics.initialized) {
    return;
  }

  window.analytics.load(writeKey, {
    integrations: destinationPreferences,
  });
  window.analytics.page();
};

const mapDestinations = destinations => {
  const consentDecision = window.OnetrustActiveGroups || ['C0001'];

  const targetingCategories = ['Advertising', 'Attribution', 'Email Marketing'];
  const performanceCategories = ['Analytics'];
  const functionalCategories = [];

  const destinationPreferences = destinations
    .map(dest => {
      if (targetingCategories.includes(dest.category)) {
        return {
          [dest.id]: consentDecision.includes('C0004'),
        };
      }
      if (functionalCategories.includes(dest.category)) {
        return {
          [dest.id]: consentDecision.includes('C0003'),
        };
      }
      if (performanceCategories.includes(dest.category)) {
        return {
          [dest.id]: consentDecision.includes('C0002'),
        };
      } else
        return {
          [dest.id]: true,
        };
    })
    .reduce(
      (acc, val) => {
        return {
          ...val,
          ...acc,
        };
      },
      {
        'Segment.io': consentDecision.includes('C0003'),
        FullStory: false,
      }
    );
  return destinationPreferences;
};

window.initializeSegment = segmentWriteKey => {
  if (!segmentWriteKey) return;
  fetchDestinationForWriteKey(segmentWriteKey).then(destinations => {
    if (!destinations) return;
    conditionallyLoadAnalytics({
      writeKey: segmentWriteKey,
      destinationPreferences: mapDestinations(destinations),
    });
  });
};
