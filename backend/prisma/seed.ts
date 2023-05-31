import { PrismaClient, Status } from '@prisma/client';

interface EmployeeProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  cpf: string;
  birth_date: Date;
  status: Status;
  image: string;
}

const prisma = new PrismaClient();

const branchsData = [
  {
    name: 'Bubblemix',
    address: '22 Clove Park',
    email: 'sserrurier0@ebay.com',
    city: 'Oceanside',
    state: 'CA',
    phone: '858-659-9412',
  },
  {
    name: 'Livetube',
    address: '27 Westend Circle',
    email: 'fcantua1@w3.org',
    city: 'New York City',
    state: 'NY',
    phone: '718-559-7117',
  },
  {
    name: 'Topicware',
    address: '35911 Eggendart Alley',
    email: 'hcutchie2@jigsy.com',
    city: 'Petaluma',
    state: 'CA',
    phone: '707-439-1619',
  },
  {
    name: 'Jabbersphere',
    address: '24 Green Plaza',
    email: 'ygorsse3@cnn.com',
    city: 'Aurora',
    state: 'CO',
    phone: '303-897-9501',
  },
  {
    name: 'Skippad',
    address: '8813 Arkansas Pass',
    email: 'lproschke4@google.ru',
    city: 'Arlington',
    state: 'TX',
    phone: '682-153-6404',
  },
  {
    name: 'Dabshots',
    address: '1357 Spohn Junction',
    email: 'clinggood5@bbb.org',
    city: 'Des Moines',
    state: 'IA',
    phone: '515-965-7833',
  },
  {
    name: 'Snaptags',
    address: '36 Northwestern Plaza',
    email: 'jcolnet6@lycos.com',
    city: 'Alhambra',
    state: 'CA',
    phone: '626-945-6201',
  },
  {
    name: 'Yodel',
    address: '14 Daystar Terrace',
    email: 'bbrumen7@uiuc.edu',
    city: 'San Francisco',
    state: 'CA',
    phone: '415-234-0056',
  },
  {
    name: 'Realbuzz',
    address: '91642 Sachtjen Avenue',
    email: 'gcalbaithe8@dagondesign.com',
    city: 'Fullerton',
    state: 'CA',
    phone: '559-344-8827',
  },
  {
    name: 'Tagfeed',
    address: '6 Hoffman Center',
    email: 'ntoomey9@ebay.com',
    city: 'Denver',
    state: 'CO',
    phone: '303-726-8543',
  },
  {
    name: 'Brainlounge',
    address: '921 Vermont Parkway',
    email: 'mbentamea@mysql.com',
    city: 'Portland',
    state: 'OR',
    phone: '971-650-0925',
  },
  {
    name: 'Skippad',
    address: '6925 Superior Road',
    email: 'ypingb@kickstarter.com',
    city: 'Tulsa',
    state: 'OK',
    phone: '918-408-4992',
  },
];

const roleData = [
  {
    name: 'Construction Manager',
  },
  {
    name: 'Supervisor',
  },
  {
    name: 'Architect',
  },
  {
    name: 'Construction Foreman',
  },
  {
    name: 'Subcontractor',
  },
  {
    name: 'Estimator',
  },
  {
    name: 'Project Manager',
  },

  {
    name: 'Electrician',
  },
  {
    name: 'Construction Expeditor',
  },
  {
    name: 'Subcontractor',
  },
  {
    name: 'Surveyor',
  },
];

const departmentData = [
  {
    name: 'Marketing',
  },
  {
    name: 'Services',
  },
  {
    name: 'Human Resources',
  },
  {
    name: 'Support',
  },
  {
    name: 'Product Management',
  },
  {
    name: 'Sales',
  },
  {
    name: 'Business Development',
  },
  {
    name: 'Accounting',
  },
  {
    name: 'Research and Development',
  },
  {
    name: 'Engineering',
  },
];

const employeeData: EmployeeProps[] = [
  {
    name: 'Elston Cuel',
    email: 'ecuel0@t.co',
    address: '05147 Anderson Avenue',
    phone: '515-747-6610',
    cpf: '2840521512',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Jacob Glynn',
    email: 'jglynn1@4shared.com',
    address: '9492 Macpherson Parkway',
    phone: '804-467-6072',
    cpf: '1744091978',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Romona Boeck',
    email: 'rboeck2@senate.gov',
    address: '46 Macpherson Road',
    phone: '203-298-6624',
    cpf: '0099526042',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Adaline Robertz',
    email: 'arobertz3@wix.com',
    address: '5843 Gateway Lane',
    phone: '314-510-9675',
    cpf: '0174341458',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Zeb Ferryman',
    email: 'zferryman4@stanford.edu',
    address: '7 Gale Crossing',
    phone: '201-485-7964',
    cpf: '5758204978',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Lynett Chambers',
    email: 'lchambers5@fema.gov',
    address: '98275 Del Sol Junction',
    phone: '484-258-1375',
    cpf: '5438663394',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: "Dulcinea O'Lennane",
    email: 'dolennane6@tiny.cc',
    address: '597 Blackbird Terrace',
    phone: '786-959-4735',
    cpf: '7623644882',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Jamesy Aldrich',
    email: 'jaldrich7@purevolume.com',
    address: '946 Bunker Hill Alley',
    phone: '415-941-2618',
    cpf: '7660622935',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Bibbie Cricket',
    email: 'bcricket8@google.fr',
    address: '86560 Memorial Avenue',
    phone: '817-981-4653',
    cpf: '8001270653',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Sybyl Baford',
    email: 'sbaford9@friendfeed.com',
    address: '095 Hazelcrest Place',
    phone: '904-198-4942',
    cpf: '1440139083',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Lainey Deeprose',
    email: 'ldeeprosea@freewebs.com',
    address: '159 Monica Circle',
    phone: '203-566-3738',
    cpf: '1554954428',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Ardys Parmeter',
    email: 'aparmeterb@craigslist.org',
    address: '6434 Esch Junction',
    phone: '786-240-5519',
    cpf: '4686599024',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Monah McKevany',
    email: 'mmckevanyc@accuweather.com',
    address: '2 Elmside Pass',
    phone: '763-309-9709',
    cpf: '6494717454',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Stavro Mundee',
    email: 'smundeed@eventbrite.com',
    address: '7689 Sauthoff Trail',
    phone: '205-833-2674',
    cpf: '4982018804',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Jobey Lillico',
    email: 'jlillicoe@pbs.org',
    address: '2 Badeau Street',
    phone: '217-769-7127',
    cpf: '9202108307',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Max Gurnell',
    email: 'mgurnellf@i2i.jp',
    address: '11823 Reindahl Center',
    phone: '203-402-2587',
    cpf: '8244526998',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Em Sloley',
    email: 'esloleyg@smh.com.au',
    address: '6 Parkside Trail',
    phone: '806-908-1284',
    cpf: '2811172173',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Florence Hoggan',
    email: 'fhogganh@discuz.net',
    address: '4 Hudson Point',
    phone: '937-900-8563',
    cpf: '4928064348',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Marv Bythell',
    email: 'mbythelli@bbb.org',
    address: '2 Rowland Plaza',
    phone: '626-772-7891',
    cpf: '8079453853',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Anette Truckett',
    email: 'atruckettj@youtube.com',
    address: '57 Dwight Junction',
    phone: '812-209-7215',
    cpf: '8577515524',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
  {
    name: 'Jo-ann Vaux',
    email: 'jvauxk@twitter.com',
    address: '60572 Leroy Parkway',
    phone: '336-742-3218',
    cpf: '1193266424',
    birth_date: new Date(),
    status: 'inactive' as Status,
    image: '',
  },
  {
    name: 'Editha Jenton',
    email: 'ejentonl@sohu.com',
    address: '75 Kinsman Street',
    phone: '209-709-9129',
    cpf: '5357291020',
    birth_date: new Date(),
    status: 'active' as Status,
    image: '',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  console.log(`Start seeding ... branchs`);

  for (const u of branchsData) {
    await prisma.branch.create({
      data: u,
    });
  }

  console.log(`Start seeding ... roles`);
  for (const u of roleData) {
    await prisma.role.create({
      data: u,
    });
  }

  console.log(`Start seeding ... departments`);
  for (const u of departmentData) {
    await prisma.department.create({
      data: u,
    });
  }
  console.log(`Start seeding ... Employees`);
  for (const u of employeeData) {
    const generateIdNumber = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };

    await prisma.employee.create({
      data: {
        name: u.name,
        email: u.email,
        address: u.address,
        phone: u.phone,
        cpf: u.cpf,
        birth_date: u.birth_date,
        status: u.status,
        image: u.image,
        branchID: generateIdNumber(1, branchsData.length),
        departmentID: generateIdNumber(1, departmentData.length),
        roleID: generateIdNumber(1, roleData.length),
      },
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
