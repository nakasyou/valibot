import { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'ru',
  schema:           (issue) => `Неправильный тип: ожидалось ${issue.expected}, получено ${issue.received}`,
  specific: {
    bic:            (issue) => `Неправильный BIC: получено ${issue.received}`,
    bytes:          (issue) => `Неправильное количество байтов: ожидалось ${issue.expected}, получено ${issue.received}`,
    creditCard:     (issue) => `Неправильный номер кредитной карты: получено ${issue.received}`,
    cuid2:          (issue) => `Неправильный Cuid2: получено ${issue.received}`,
    custom:         (issue) => `Неправильные данные: получено ${issue.received}`,
    customAsync:    (issue) => `Неправильные данные: получено ${issue.received}`,
    decimal:        (issue) => `Неправильное десятичное число: получено ${issue.received}`,
    email:          (issue) => `Неправильный email: получено ${issue.received}`,
    emoji:          (issue) => `Неправильный эмодзи: получено ${issue.received}`,
    endsWith:       (issue) => `Неправильный конец: ожидалось ${issue.expected}, получено ${issue.received}`,
    equal:          (issue) => `Неправильные данные: ожидалось ${issue.expected}, получено ${issue.received}`,
    excludes:       (issue) => `Неправильное исключение: ожидалось ${issue.expected}, получено ${issue.received}`,
    finite:         (issue) => `Неправильное конечное число: получено ${issue.received}`,
    hash:           (issue) => `Неправильный хеш: получено ${issue.received}`,
    hexColor:       (issue) => `Неправильный шестнадцатеричный цвет: получено ${issue.received}`,
    hexadecimal:    (issue) => `Неправильное шестнадцатеричное значение: получено ${issue.received}`,
    imei:           (issue) => `Неправильный IMEI: получено ${issue.received}`,
    includes:       (issue) => `Неправильное вхождение: ожидалось ${issue.expected}, получено ${issue.received}`,
    integer:        (issue) => `Неправильное целое число: получено ${issue.received}`,
    ip:             (issue) => `Неправильный IP: получено ${issue.received}`,
    ipv4:           (issue) => `Неправильный IPv4: получено ${issue.received}`,
    ipv6:           (issue) => `Неправильный IPv6: получено ${issue.received}`,
    isoDate:        (issue) => `Неправильная дата: получено ${issue.received}`,
    isoDateTime:    (issue) => `Неправильные дата и время: получено ${issue.received}`,
    isoTime:        (issue) => `Неправильное время: получено ${issue.received}`,
    isoTimeSecond:  (issue) => `Неправильное время с секундами: получено ${issue.received}`,
    isoTimestamp:   (issue) => `Неправильная метка времени: получено ${issue.received}`,
    isoWeek:        (issue) => `Неправильная неделя: получено ${issue.received}`,
    length:         (issue) => `Неправильная длина: ожидалось ${issue.expected}, получено ${issue.received}`,
    mac:            (issue) => `Неправильный MAC: получено ${issue.received}`,
    mac48:          (issue) => `Неправильный 48-битный MAC: получено ${issue.received}`,
    mac64:          (issue) => `Неправильный 64-битный MAC: получено ${issue.received}`,
    maxBytes:       (issue) => `Неправильное количество байтов: ожидалось ${issue.expected}, получено ${issue.received}`,
    maxLength:      (issue) => `Неправильная длина: ожидалось ${issue.expected}, получено ${issue.received}`,
    maxSize:        (issue) => `Неправильный размер: ожидалось ${issue.expected}, получено ${issue.received}`,
    maxValue:       (issue) => `Неправильное значение: ожидалось ${issue.expected}, получено ${issue.received}`,
    mimeType:       (issue) => `Неправильный MIME тип: ожидалось ${issue.expected}, получено ${issue.received}`,
    minBytes:       (issue) => `Неправильное количество байтов: ожидалось ${issue.expected}, получено ${issue.received}`,
    minLength:      (issue) => `Неправильная длина: ожидалось ${issue.expected}, получено ${issue.received}`,
    minSize:        (issue) => `Неправильный размер: ожидалось ${issue.expected}, получено ${issue.received}`,
    minValue:       (issue) => `Неправильное значение: ожидалось ${issue.expected}, получено ${issue.received}`,
    multipleOf:     (issue) => `Неправильное кратное число: ожидалось ${issue.expected}, получено ${issue.received}`,
    notBytes:       (issue) => `Неправильное количество байтов: ожидалось ${issue.expected}, получено ${issue.received}`,
    notLength:      (issue) => `Неправильная длина: ожидалось ${issue.expected}, получено ${issue.received}`,
    notSize:        (issue) => `Неправильный размер: ожидалось ${issue.expected}, получено ${issue.received}`,
    notValue:       (issue) => `Неправильное значение: ожидалось ${issue.expected}, получено ${issue.received}`,
    octal:          (issue) => `Неправильный восьмеричный код: получено ${issue.received}`,
    regex:          (issue) => `Неправильный формат: ожидалось ${issue.expected}, получено ${issue.received}`,
    safeInteger:    (issue) => `Неправильное безопасное целое число: получено ${issue.received}`,
    size:           (issue) => `Неправильный размер: ожидалось ${issue.expected}, получено ${issue.received}`,
    startsWith:     (issue) => `Неправильное начало: ожидалось ${issue.expected}, получено ${issue.received}`,
    ulid:           (issue) => `Неправильный ULID: получено ${issue.received}`,
    url:            (issue) => `Неправильный URL: получено ${issue.received}`,
    uuid:           (issue) => `Неправильный UUID: получено ${issue.received}`,
    value:          (issue) => `Неправильное значение: ожидалось ${issue.expected}, получено ${issue.received}`,
  },
};

export default language;

