interface Passenger {
    id: number;
    passenger_name: string;
    passenger_avatar: string;
    origin: string;
    destination: string;
  }
  
  interface Section {
    title: string;
    data: Passenger[];
  }
  
  export default function transformToSectionList(passengers: Passenger[]): Section[] {
    const sectionsMap: { [key: string]: Passenger[] } = {};
  
    passengers.forEach((passenger) => {
      if (!sectionsMap[passenger.origin]) {
        sectionsMap[passenger.origin] = [];
      }
      if (!sectionsMap[passenger.destination]) {
        sectionsMap[passenger.destination] = [];
      }
  
      if (!sectionsMap[passenger.origin].some(p => p.id === passenger.id)) {
        sectionsMap[passenger.origin].push(passenger);
      }
  
      if (!sectionsMap[passenger.destination].some(p => p.id === passenger.id)) {
        sectionsMap[passenger.destination].push(passenger);
      }
    });
  
    const sections: Section[] = Object.keys(sectionsMap).map((country) => ({
      title: country + ' (' + sectionsMap[country].length + ')',
      data: sectionsMap[country],
    }));
  
    sections.sort((a, b) => a.title.localeCompare(b.title));
  
    return sections;
  }