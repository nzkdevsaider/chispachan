
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model ThreadReply
 * 
 */
export type ThreadReply = $Result.DefaultSelection<Prisma.$ThreadReplyPayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.threadReply`: Exposes CRUD operations for the **ThreadReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadReplies
    * const threadReplies = await prisma.threadReply.findMany()
    * ```
    */
  get threadReply(): Prisma.ThreadReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Thread: 'Thread',
    ThreadReply: 'ThreadReply',
    Board: 'Board'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "thread" | "threadReply" | "board"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      ThreadReply: {
        payload: Prisma.$ThreadReplyPayload<ExtArgs>
        fields: Prisma.ThreadReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          findFirst: {
            args: Prisma.ThreadReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          findMany: {
            args: Prisma.ThreadReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>[]
          }
          create: {
            args: Prisma.ThreadReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          createMany: {
            args: Prisma.ThreadReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>[]
          }
          delete: {
            args: Prisma.ThreadReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          update: {
            args: Prisma.ThreadReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          deleteMany: {
            args: Prisma.ThreadReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>[]
          }
          upsert: {
            args: Prisma.ThreadReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadReplyPayload>
          }
          aggregate: {
            args: Prisma.ThreadReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThreadReply>
          }
          groupBy: {
            args: Prisma.ThreadReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadReplyCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    thread?: ThreadOmit
    threadReply?: ThreadReplyOmit
    board?: BoardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Thread: number
    ThreadReply: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | UserCountOutputTypeCountThreadArgs
    ThreadReply?: boolean | UserCountOutputTypeCountThreadReplyArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadReplyWhereInput
  }


  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    ThreadReply: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ThreadReply?: boolean | ThreadCountOutputTypeCountThreadReplyArgs
  }

  // Custom InputTypes
  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountThreadReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadReplyWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    Thread: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | BoardCountOutputTypeCountThreadArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    ip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    ip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    ip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    ip: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Thread?: boolean | User$ThreadArgs<ExtArgs>
    ThreadReply?: boolean | User$ThreadReplyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "ip" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | User$ThreadArgs<ExtArgs>
    ThreadReply?: boolean | User$ThreadReplyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Thread: Prisma.$ThreadPayload<ExtArgs>[]
      ThreadReply: Prisma.$ThreadReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      ip: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Thread<T extends User$ThreadArgs<ExtArgs> = {}>(args?: Subset<T, User$ThreadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ThreadReply<T extends User$ThreadReplyArgs<ExtArgs> = {}>(args?: Subset<T, User$ThreadReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly ip: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Thread
   */
  export type User$ThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * User.ThreadReply
   */
  export type User$ThreadReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    where?: ThreadReplyWhereInput
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    cursor?: ThreadReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadReplyScalarFieldEnum | ThreadReplyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadMinAggregateOutputType = {
    threadId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    boardBoardId: string | null
  }

  export type ThreadMaxAggregateOutputType = {
    threadId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    boardBoardId: string | null
  }

  export type ThreadCountAggregateOutputType = {
    threadId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    boardBoardId: number
    _all: number
  }


  export type ThreadMinAggregateInputType = {
    threadId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    boardBoardId?: true
  }

  export type ThreadMaxAggregateInputType = {
    threadId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    boardBoardId?: true
  }

  export type ThreadCountAggregateInputType = {
    threadId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    boardBoardId?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    threadId: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    boardBoardId: string | null
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    threadId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    boardBoardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ThreadReply?: boolean | Thread$ThreadReplyArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    threadId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    boardBoardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    threadId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    boardBoardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    threadId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    boardBoardId?: boolean
  }

  export type ThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"threadId" | "title" | "content" | "createdAt" | "updatedAt" | "userId" | "boardBoardId", ExtArgs["result"]["thread"]>
  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ThreadReply?: boolean | Thread$ThreadReplyArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
  }
  export type ThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Board?: boolean | Thread$BoardArgs<ExtArgs>
  }

  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ThreadReply: Prisma.$ThreadReplyPayload<ExtArgs>[]
      Board: Prisma.$BoardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      threadId: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
      boardBoardId: string | null
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }

  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadFindUniqueArgs>(args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadFindFirstArgs>(args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `threadId`
     * const threadWithThreadIdOnly = await prisma.thread.findMany({ select: { threadId: true } })
     * 
     */
    findMany<T extends ThreadFindManyArgs>(args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
     */
    create<T extends ThreadCreateArgs>(args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Threads.
     * @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadCreateManyArgs>(args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Threads and returns the data saved in the database.
     * @param {ThreadCreateManyAndReturnArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Threads and only return the `threadId`
     * const threadWithThreadIdOnly = await prisma.thread.createManyAndReturn({
     *   select: { threadId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
     */
    delete<T extends ThreadDeleteArgs>(args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadUpdateArgs>(args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadDeleteManyArgs>(args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadUpdateManyArgs>(args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads and returns the data updated in the database.
     * @param {ThreadUpdateManyAndReturnArgs} args - Arguments to update many Threads.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Threads and only return the `threadId`
     * const threadWithThreadIdOnly = await prisma.thread.updateManyAndReturn({
     *   select: { threadId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
     */
    upsert<T extends ThreadUpsertArgs>(args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ThreadReply<T extends Thread$ThreadReplyArgs<ExtArgs> = {}>(args?: Subset<T, Thread$ThreadReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Board<T extends Thread$BoardArgs<ExtArgs> = {}>(args?: Subset<T, Thread$BoardArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Thread model
   */
  interface ThreadFieldRefs {
    readonly threadId: FieldRef<"Thread", 'String'>
    readonly title: FieldRef<"Thread", 'String'>
    readonly content: FieldRef<"Thread", 'String'>
    readonly createdAt: FieldRef<"Thread", 'DateTime'>
    readonly updatedAt: FieldRef<"Thread", 'DateTime'>
    readonly userId: FieldRef<"Thread", 'String'>
    readonly boardBoardId: FieldRef<"Thread", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }

  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thread createManyAndReturn
   */
  export type ThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
  }

  /**
   * Thread updateManyAndReturn
   */
  export type ThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }

  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to delete.
     */
    limit?: number
  }

  /**
   * Thread.ThreadReply
   */
  export type Thread$ThreadReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    where?: ThreadReplyWhereInput
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    cursor?: ThreadReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadReplyScalarFieldEnum | ThreadReplyScalarFieldEnum[]
  }

  /**
   * Thread.Board
   */
  export type Thread$BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
  }

  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
  }


  /**
   * Model ThreadReply
   */

  export type AggregateThreadReply = {
    _count: ThreadReplyCountAggregateOutputType | null
    _min: ThreadReplyMinAggregateOutputType | null
    _max: ThreadReplyMaxAggregateOutputType | null
  }

  export type ThreadReplyMinAggregateOutputType = {
    replyId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    threadId: string | null
    userId: string | null
  }

  export type ThreadReplyMaxAggregateOutputType = {
    replyId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    threadId: string | null
    userId: string | null
  }

  export type ThreadReplyCountAggregateOutputType = {
    replyId: number
    content: number
    createdAt: number
    updatedAt: number
    threadId: number
    userId: number
    _all: number
  }


  export type ThreadReplyMinAggregateInputType = {
    replyId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    threadId?: true
    userId?: true
  }

  export type ThreadReplyMaxAggregateInputType = {
    replyId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    threadId?: true
    userId?: true
  }

  export type ThreadReplyCountAggregateInputType = {
    replyId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    threadId?: true
    userId?: true
    _all?: true
  }

  export type ThreadReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThreadReply to aggregate.
     */
    where?: ThreadReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadReplies to fetch.
     */
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThreadReplies
    **/
    _count?: true | ThreadReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadReplyMaxAggregateInputType
  }

  export type GetThreadReplyAggregateType<T extends ThreadReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateThreadReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreadReply[P]>
      : GetScalarType<T[P], AggregateThreadReply[P]>
  }




  export type ThreadReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadReplyWhereInput
    orderBy?: ThreadReplyOrderByWithAggregationInput | ThreadReplyOrderByWithAggregationInput[]
    by: ThreadReplyScalarFieldEnum[] | ThreadReplyScalarFieldEnum
    having?: ThreadReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadReplyCountAggregateInputType | true
    _min?: ThreadReplyMinAggregateInputType
    _max?: ThreadReplyMaxAggregateInputType
  }

  export type ThreadReplyGroupByOutputType = {
    replyId: string
    content: string
    createdAt: Date
    updatedAt: Date
    threadId: string
    userId: string
    _count: ThreadReplyCountAggregateOutputType | null
    _min: ThreadReplyMinAggregateOutputType | null
    _max: ThreadReplyMaxAggregateOutputType | null
  }

  type GetThreadReplyGroupByPayload<T extends ThreadReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadReplyGroupByOutputType[P]>
        }
      >
    >


  export type ThreadReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    threadId?: boolean
    userId?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadReply"]>

  export type ThreadReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    threadId?: boolean
    userId?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadReply"]>

  export type ThreadReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    threadId?: boolean
    userId?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadReply"]>

  export type ThreadReplySelectScalar = {
    replyId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    threadId?: boolean
    userId?: boolean
  }

  export type ThreadReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"replyId" | "content" | "createdAt" | "updatedAt" | "threadId" | "userId", ExtArgs["result"]["threadReply"]>
  export type ThreadReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThreadReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThreadReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ThreadReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThreadReply"
    objects: {
      thread: Prisma.$ThreadPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      replyId: string
      content: string
      createdAt: Date
      updatedAt: Date
      threadId: string
      userId: string
    }, ExtArgs["result"]["threadReply"]>
    composites: {}
  }

  type ThreadReplyGetPayload<S extends boolean | null | undefined | ThreadReplyDefaultArgs> = $Result.GetResult<Prisma.$ThreadReplyPayload, S>

  type ThreadReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadReplyCountAggregateInputType | true
    }

  export interface ThreadReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThreadReply'], meta: { name: 'ThreadReply' } }
    /**
     * Find zero or one ThreadReply that matches the filter.
     * @param {ThreadReplyFindUniqueArgs} args - Arguments to find a ThreadReply
     * @example
     * // Get one ThreadReply
     * const threadReply = await prisma.threadReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadReplyFindUniqueArgs>(args: SelectSubset<T, ThreadReplyFindUniqueArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ThreadReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadReplyFindUniqueOrThrowArgs} args - Arguments to find a ThreadReply
     * @example
     * // Get one ThreadReply
     * const threadReply = await prisma.threadReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThreadReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyFindFirstArgs} args - Arguments to find a ThreadReply
     * @example
     * // Get one ThreadReply
     * const threadReply = await prisma.threadReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadReplyFindFirstArgs>(args?: SelectSubset<T, ThreadReplyFindFirstArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThreadReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyFindFirstOrThrowArgs} args - Arguments to find a ThreadReply
     * @example
     * // Get one ThreadReply
     * const threadReply = await prisma.threadReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ThreadReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThreadReplies
     * const threadReplies = await prisma.threadReply.findMany()
     * 
     * // Get first 10 ThreadReplies
     * const threadReplies = await prisma.threadReply.findMany({ take: 10 })
     * 
     * // Only select the `replyId`
     * const threadReplyWithReplyIdOnly = await prisma.threadReply.findMany({ select: { replyId: true } })
     * 
     */
    findMany<T extends ThreadReplyFindManyArgs>(args?: SelectSubset<T, ThreadReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ThreadReply.
     * @param {ThreadReplyCreateArgs} args - Arguments to create a ThreadReply.
     * @example
     * // Create one ThreadReply
     * const ThreadReply = await prisma.threadReply.create({
     *   data: {
     *     // ... data to create a ThreadReply
     *   }
     * })
     * 
     */
    create<T extends ThreadReplyCreateArgs>(args: SelectSubset<T, ThreadReplyCreateArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ThreadReplies.
     * @param {ThreadReplyCreateManyArgs} args - Arguments to create many ThreadReplies.
     * @example
     * // Create many ThreadReplies
     * const threadReply = await prisma.threadReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadReplyCreateManyArgs>(args?: SelectSubset<T, ThreadReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ThreadReplies and returns the data saved in the database.
     * @param {ThreadReplyCreateManyAndReturnArgs} args - Arguments to create many ThreadReplies.
     * @example
     * // Create many ThreadReplies
     * const threadReply = await prisma.threadReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ThreadReplies and only return the `replyId`
     * const threadReplyWithReplyIdOnly = await prisma.threadReply.createManyAndReturn({
     *   select: { replyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ThreadReply.
     * @param {ThreadReplyDeleteArgs} args - Arguments to delete one ThreadReply.
     * @example
     * // Delete one ThreadReply
     * const ThreadReply = await prisma.threadReply.delete({
     *   where: {
     *     // ... filter to delete one ThreadReply
     *   }
     * })
     * 
     */
    delete<T extends ThreadReplyDeleteArgs>(args: SelectSubset<T, ThreadReplyDeleteArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ThreadReply.
     * @param {ThreadReplyUpdateArgs} args - Arguments to update one ThreadReply.
     * @example
     * // Update one ThreadReply
     * const threadReply = await prisma.threadReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadReplyUpdateArgs>(args: SelectSubset<T, ThreadReplyUpdateArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ThreadReplies.
     * @param {ThreadReplyDeleteManyArgs} args - Arguments to filter ThreadReplies to delete.
     * @example
     * // Delete a few ThreadReplies
     * const { count } = await prisma.threadReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadReplyDeleteManyArgs>(args?: SelectSubset<T, ThreadReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThreadReplies
     * const threadReply = await prisma.threadReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadReplyUpdateManyArgs>(args: SelectSubset<T, ThreadReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadReplies and returns the data updated in the database.
     * @param {ThreadReplyUpdateManyAndReturnArgs} args - Arguments to update many ThreadReplies.
     * @example
     * // Update many ThreadReplies
     * const threadReply = await prisma.threadReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ThreadReplies and only return the `replyId`
     * const threadReplyWithReplyIdOnly = await prisma.threadReply.updateManyAndReturn({
     *   select: { replyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ThreadReply.
     * @param {ThreadReplyUpsertArgs} args - Arguments to update or create a ThreadReply.
     * @example
     * // Update or create a ThreadReply
     * const threadReply = await prisma.threadReply.upsert({
     *   create: {
     *     // ... data to create a ThreadReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThreadReply we want to update
     *   }
     * })
     */
    upsert<T extends ThreadReplyUpsertArgs>(args: SelectSubset<T, ThreadReplyUpsertArgs<ExtArgs>>): Prisma__ThreadReplyClient<$Result.GetResult<Prisma.$ThreadReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ThreadReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyCountArgs} args - Arguments to filter ThreadReplies to count.
     * @example
     * // Count the number of ThreadReplies
     * const count = await prisma.threadReply.count({
     *   where: {
     *     // ... the filter for the ThreadReplies we want to count
     *   }
     * })
    **/
    count<T extends ThreadReplyCountArgs>(
      args?: Subset<T, ThreadReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThreadReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadReplyAggregateArgs>(args: Subset<T, ThreadReplyAggregateArgs>): Prisma.PrismaPromise<GetThreadReplyAggregateType<T>>

    /**
     * Group by ThreadReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadReplyGroupByArgs['orderBy'] }
        : { orderBy?: ThreadReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThreadReply model
   */
  readonly fields: ThreadReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThreadReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ThreadReply model
   */
  interface ThreadReplyFieldRefs {
    readonly replyId: FieldRef<"ThreadReply", 'String'>
    readonly content: FieldRef<"ThreadReply", 'String'>
    readonly createdAt: FieldRef<"ThreadReply", 'DateTime'>
    readonly updatedAt: FieldRef<"ThreadReply", 'DateTime'>
    readonly threadId: FieldRef<"ThreadReply", 'String'>
    readonly userId: FieldRef<"ThreadReply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ThreadReply findUnique
   */
  export type ThreadReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter, which ThreadReply to fetch.
     */
    where: ThreadReplyWhereUniqueInput
  }

  /**
   * ThreadReply findUniqueOrThrow
   */
  export type ThreadReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter, which ThreadReply to fetch.
     */
    where: ThreadReplyWhereUniqueInput
  }

  /**
   * ThreadReply findFirst
   */
  export type ThreadReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter, which ThreadReply to fetch.
     */
    where?: ThreadReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadReplies to fetch.
     */
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadReplies.
     */
    cursor?: ThreadReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadReplies.
     */
    distinct?: ThreadReplyScalarFieldEnum | ThreadReplyScalarFieldEnum[]
  }

  /**
   * ThreadReply findFirstOrThrow
   */
  export type ThreadReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter, which ThreadReply to fetch.
     */
    where?: ThreadReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadReplies to fetch.
     */
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadReplies.
     */
    cursor?: ThreadReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadReplies.
     */
    distinct?: ThreadReplyScalarFieldEnum | ThreadReplyScalarFieldEnum[]
  }

  /**
   * ThreadReply findMany
   */
  export type ThreadReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter, which ThreadReplies to fetch.
     */
    where?: ThreadReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadReplies to fetch.
     */
    orderBy?: ThreadReplyOrderByWithRelationInput | ThreadReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThreadReplies.
     */
    cursor?: ThreadReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadReplies.
     */
    skip?: number
    distinct?: ThreadReplyScalarFieldEnum | ThreadReplyScalarFieldEnum[]
  }

  /**
   * ThreadReply create
   */
  export type ThreadReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a ThreadReply.
     */
    data: XOR<ThreadReplyCreateInput, ThreadReplyUncheckedCreateInput>
  }

  /**
   * ThreadReply createMany
   */
  export type ThreadReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThreadReplies.
     */
    data: ThreadReplyCreateManyInput | ThreadReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThreadReply createManyAndReturn
   */
  export type ThreadReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * The data used to create many ThreadReplies.
     */
    data: ThreadReplyCreateManyInput | ThreadReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThreadReply update
   */
  export type ThreadReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a ThreadReply.
     */
    data: XOR<ThreadReplyUpdateInput, ThreadReplyUncheckedUpdateInput>
    /**
     * Choose, which ThreadReply to update.
     */
    where: ThreadReplyWhereUniqueInput
  }

  /**
   * ThreadReply updateMany
   */
  export type ThreadReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThreadReplies.
     */
    data: XOR<ThreadReplyUpdateManyMutationInput, ThreadReplyUncheckedUpdateManyInput>
    /**
     * Filter which ThreadReplies to update
     */
    where?: ThreadReplyWhereInput
    /**
     * Limit how many ThreadReplies to update.
     */
    limit?: number
  }

  /**
   * ThreadReply updateManyAndReturn
   */
  export type ThreadReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * The data used to update ThreadReplies.
     */
    data: XOR<ThreadReplyUpdateManyMutationInput, ThreadReplyUncheckedUpdateManyInput>
    /**
     * Filter which ThreadReplies to update
     */
    where?: ThreadReplyWhereInput
    /**
     * Limit how many ThreadReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThreadReply upsert
   */
  export type ThreadReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the ThreadReply to update in case it exists.
     */
    where: ThreadReplyWhereUniqueInput
    /**
     * In case the ThreadReply found by the `where` argument doesn't exist, create a new ThreadReply with this data.
     */
    create: XOR<ThreadReplyCreateInput, ThreadReplyUncheckedCreateInput>
    /**
     * In case the ThreadReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadReplyUpdateInput, ThreadReplyUncheckedUpdateInput>
  }

  /**
   * ThreadReply delete
   */
  export type ThreadReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
    /**
     * Filter which ThreadReply to delete.
     */
    where: ThreadReplyWhereUniqueInput
  }

  /**
   * ThreadReply deleteMany
   */
  export type ThreadReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThreadReplies to delete
     */
    where?: ThreadReplyWhereInput
    /**
     * Limit how many ThreadReplies to delete.
     */
    limit?: number
  }

  /**
   * ThreadReply without action
   */
  export type ThreadReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadReply
     */
    select?: ThreadReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadReply
     */
    omit?: ThreadReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadReplyInclude<ExtArgs> | null
  }


  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    boardId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    boardId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    boardId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    boardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardMaxAggregateInputType = {
    boardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardCountAggregateInputType = {
    boardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    boardId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    boardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Thread?: boolean | Board$ThreadArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    boardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    boardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    boardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"boardId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | Board$ThreadArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      Thread: Prisma.$ThreadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      boardId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `boardId`
     * const boardWithBoardIdOnly = await prisma.board.findMany({ select: { boardId: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `boardId`
     * const boardWithBoardIdOnly = await prisma.board.createManyAndReturn({
     *   select: { boardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `boardId`
     * const boardWithBoardIdOnly = await prisma.board.updateManyAndReturn({
     *   select: { boardId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Thread<T extends Board$ThreadArgs<ExtArgs> = {}>(args?: Subset<T, Board$ThreadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly boardId: FieldRef<"Board", 'String'>
    readonly name: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.Thread
   */
  export type Board$ThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    ip: 'ip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    threadId: 'threadId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    boardBoardId: 'boardBoardId'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const ThreadReplyScalarFieldEnum: {
    replyId: 'replyId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    threadId: 'threadId',
    userId: 'userId'
  };

  export type ThreadReplyScalarFieldEnum = (typeof ThreadReplyScalarFieldEnum)[keyof typeof ThreadReplyScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    boardId: 'boardId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    ip?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Thread?: ThreadListRelationFilter
    ThreadReply?: ThreadReplyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Thread?: ThreadOrderByRelationAggregateInput
    ThreadReply?: ThreadReplyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    ip?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Thread?: ThreadListRelationFilter
    ThreadReply?: ThreadReplyListRelationFilter
  }, "userId" | "ip">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    ip?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    threadId?: StringFilter<"Thread"> | string
    title?: StringFilter<"Thread"> | string
    content?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    userId?: StringFilter<"Thread"> | string
    boardBoardId?: StringNullableFilter<"Thread"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ThreadReply?: ThreadReplyListRelationFilter
    Board?: XOR<BoardNullableScalarRelationFilter, BoardWhereInput> | null
  }

  export type ThreadOrderByWithRelationInput = {
    threadId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    boardBoardId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    ThreadReply?: ThreadReplyOrderByRelationAggregateInput
    Board?: BoardOrderByWithRelationInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    threadId?: string
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    title?: StringFilter<"Thread"> | string
    content?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    userId?: StringFilter<"Thread"> | string
    boardBoardId?: StringNullableFilter<"Thread"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ThreadReply?: ThreadReplyListRelationFilter
    Board?: XOR<BoardNullableScalarRelationFilter, BoardWhereInput> | null
  }, "threadId">

  export type ThreadOrderByWithAggregationInput = {
    threadId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    boardBoardId?: SortOrderInput | SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    threadId?: StringWithAggregatesFilter<"Thread"> | string
    title?: StringWithAggregatesFilter<"Thread"> | string
    content?: StringWithAggregatesFilter<"Thread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    userId?: StringWithAggregatesFilter<"Thread"> | string
    boardBoardId?: StringNullableWithAggregatesFilter<"Thread"> | string | null
  }

  export type ThreadReplyWhereInput = {
    AND?: ThreadReplyWhereInput | ThreadReplyWhereInput[]
    OR?: ThreadReplyWhereInput[]
    NOT?: ThreadReplyWhereInput | ThreadReplyWhereInput[]
    replyId?: StringFilter<"ThreadReply"> | string
    content?: StringFilter<"ThreadReply"> | string
    createdAt?: DateTimeFilter<"ThreadReply"> | Date | string
    updatedAt?: DateTimeFilter<"ThreadReply"> | Date | string
    threadId?: StringFilter<"ThreadReply"> | string
    userId?: StringFilter<"ThreadReply"> | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ThreadReplyOrderByWithRelationInput = {
    replyId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ThreadReplyWhereUniqueInput = Prisma.AtLeast<{
    replyId?: string
    AND?: ThreadReplyWhereInput | ThreadReplyWhereInput[]
    OR?: ThreadReplyWhereInput[]
    NOT?: ThreadReplyWhereInput | ThreadReplyWhereInput[]
    content?: StringFilter<"ThreadReply"> | string
    createdAt?: DateTimeFilter<"ThreadReply"> | Date | string
    updatedAt?: DateTimeFilter<"ThreadReply"> | Date | string
    threadId?: StringFilter<"ThreadReply"> | string
    userId?: StringFilter<"ThreadReply"> | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "replyId">

  export type ThreadReplyOrderByWithAggregationInput = {
    replyId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    _count?: ThreadReplyCountOrderByAggregateInput
    _max?: ThreadReplyMaxOrderByAggregateInput
    _min?: ThreadReplyMinOrderByAggregateInput
  }

  export type ThreadReplyScalarWhereWithAggregatesInput = {
    AND?: ThreadReplyScalarWhereWithAggregatesInput | ThreadReplyScalarWhereWithAggregatesInput[]
    OR?: ThreadReplyScalarWhereWithAggregatesInput[]
    NOT?: ThreadReplyScalarWhereWithAggregatesInput | ThreadReplyScalarWhereWithAggregatesInput[]
    replyId?: StringWithAggregatesFilter<"ThreadReply"> | string
    content?: StringWithAggregatesFilter<"ThreadReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ThreadReply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ThreadReply"> | Date | string
    threadId?: StringWithAggregatesFilter<"ThreadReply"> | string
    userId?: StringWithAggregatesFilter<"ThreadReply"> | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    boardId?: StringFilter<"Board"> | string
    name?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    Thread?: ThreadListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    boardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Thread?: ThreadOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    boardId?: string
    name?: string
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    Thread?: ThreadListRelationFilter
  }, "boardId" | "name">

  export type BoardOrderByWithAggregationInput = {
    boardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    boardId?: StringWithAggregatesFilter<"Board"> | string
    name?: StringWithAggregatesFilter<"Board"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutUserInput
    ThreadReply?: ThreadReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadUncheckedCreateNestedManyWithoutUserInput
    ThreadReply?: ThreadReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutUserNestedInput
    ThreadReply?: ThreadReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    ThreadReply?: ThreadReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutThreadInput
    ThreadReply?: ThreadReplyCreateNestedManyWithoutThreadInput
    Board?: BoardCreateNestedOneWithoutThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    boardBoardId?: string | null
    ThreadReply?: ThreadReplyUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadUpdateInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThreadNestedInput
    ThreadReply?: ThreadReplyUpdateManyWithoutThreadNestedInput
    Board?: BoardUpdateOneWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    boardBoardId?: NullableStringFieldUpdateOperationsInput | string | null
    ThreadReply?: ThreadReplyUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateManyInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    boardBoardId?: string | null
  }

  export type ThreadUpdateManyMutationInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    boardBoardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThreadReplyCreateInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutThreadReplyInput
    user: UserCreateNestedOneWithoutThreadReplyInput
  }

  export type ThreadReplyUncheckedCreateInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    threadId: string
    userId: string
  }

  export type ThreadReplyUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutThreadReplyNestedInput
    user?: UserUpdateOneRequiredWithoutThreadReplyNestedInput
  }

  export type ThreadReplyUncheckedUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadReplyCreateManyInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    threadId: string
    userId: string
  }

  export type ThreadReplyUpdateManyMutationInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadReplyUncheckedUpdateManyInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateInput = {
    boardId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    boardId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    boardId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type ThreadReplyListRelationFilter = {
    every?: ThreadReplyWhereInput
    some?: ThreadReplyWhereInput
    none?: ThreadReplyWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoardNullableScalarRelationFilter = {
    is?: BoardWhereInput | null
    isNot?: BoardWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ThreadCountOrderByAggregateInput = {
    threadId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    boardBoardId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    threadId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    boardBoardId?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    threadId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    boardBoardId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ThreadScalarRelationFilter = {
    is?: ThreadWhereInput
    isNot?: ThreadWhereInput
  }

  export type ThreadReplyCountOrderByAggregateInput = {
    replyId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadReplyMaxOrderByAggregateInput = {
    replyId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadReplyMinOrderByAggregateInput = {
    replyId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    boardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    boardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    boardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type ThreadReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput> | ThreadReplyCreateWithoutUserInput[] | ThreadReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutUserInput | ThreadReplyCreateOrConnectWithoutUserInput[]
    createMany?: ThreadReplyCreateManyUserInputEnvelope
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type ThreadReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput> | ThreadReplyCreateWithoutUserInput[] | ThreadReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutUserInput | ThreadReplyCreateOrConnectWithoutUserInput[]
    createMany?: ThreadReplyCreateManyUserInputEnvelope
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ThreadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutUserInput | ThreadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutUserInput | ThreadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutUserInput | ThreadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type ThreadReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput> | ThreadReplyCreateWithoutUserInput[] | ThreadReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutUserInput | ThreadReplyCreateOrConnectWithoutUserInput[]
    upsert?: ThreadReplyUpsertWithWhereUniqueWithoutUserInput | ThreadReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadReplyCreateManyUserInputEnvelope
    set?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    disconnect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    delete?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    update?: ThreadReplyUpdateWithWhereUniqueWithoutUserInput | ThreadReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadReplyUpdateManyWithWhereWithoutUserInput | ThreadReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutUserInput | ThreadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutUserInput | ThreadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutUserInput | ThreadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type ThreadReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput> | ThreadReplyCreateWithoutUserInput[] | ThreadReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutUserInput | ThreadReplyCreateOrConnectWithoutUserInput[]
    upsert?: ThreadReplyUpsertWithWhereUniqueWithoutUserInput | ThreadReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadReplyCreateManyUserInputEnvelope
    set?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    disconnect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    delete?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    update?: ThreadReplyUpdateWithWhereUniqueWithoutUserInput | ThreadReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadReplyUpdateManyWithWhereWithoutUserInput | ThreadReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutThreadInput = {
    create?: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadReplyCreateNestedManyWithoutThreadInput = {
    create?: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput> | ThreadReplyCreateWithoutThreadInput[] | ThreadReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutThreadInput | ThreadReplyCreateOrConnectWithoutThreadInput[]
    createMany?: ThreadReplyCreateManyThreadInputEnvelope
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
  }

  export type BoardCreateNestedOneWithoutThreadInput = {
    create?: XOR<BoardCreateWithoutThreadInput, BoardUncheckedCreateWithoutThreadInput>
    connectOrCreate?: BoardCreateOrConnectWithoutThreadInput
    connect?: BoardWhereUniqueInput
  }

  export type ThreadReplyUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput> | ThreadReplyCreateWithoutThreadInput[] | ThreadReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutThreadInput | ThreadReplyCreateOrConnectWithoutThreadInput[]
    createMany?: ThreadReplyCreateManyThreadInputEnvelope
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutThreadNestedInput = {
    create?: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadInput
    upsert?: UserUpsertWithoutThreadInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadInput, UserUpdateWithoutThreadInput>, UserUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadReplyUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput> | ThreadReplyCreateWithoutThreadInput[] | ThreadReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutThreadInput | ThreadReplyCreateOrConnectWithoutThreadInput[]
    upsert?: ThreadReplyUpsertWithWhereUniqueWithoutThreadInput | ThreadReplyUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ThreadReplyCreateManyThreadInputEnvelope
    set?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    disconnect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    delete?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    update?: ThreadReplyUpdateWithWhereUniqueWithoutThreadInput | ThreadReplyUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ThreadReplyUpdateManyWithWhereWithoutThreadInput | ThreadReplyUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
  }

  export type BoardUpdateOneWithoutThreadNestedInput = {
    create?: XOR<BoardCreateWithoutThreadInput, BoardUncheckedCreateWithoutThreadInput>
    connectOrCreate?: BoardCreateOrConnectWithoutThreadInput
    upsert?: BoardUpsertWithoutThreadInput
    disconnect?: BoardWhereInput | boolean
    delete?: BoardWhereInput | boolean
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutThreadInput, BoardUpdateWithoutThreadInput>, BoardUncheckedUpdateWithoutThreadInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ThreadReplyUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput> | ThreadReplyCreateWithoutThreadInput[] | ThreadReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadReplyCreateOrConnectWithoutThreadInput | ThreadReplyCreateOrConnectWithoutThreadInput[]
    upsert?: ThreadReplyUpsertWithWhereUniqueWithoutThreadInput | ThreadReplyUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ThreadReplyCreateManyThreadInputEnvelope
    set?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    disconnect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    delete?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    connect?: ThreadReplyWhereUniqueInput | ThreadReplyWhereUniqueInput[]
    update?: ThreadReplyUpdateWithWhereUniqueWithoutThreadInput | ThreadReplyUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ThreadReplyUpdateManyWithWhereWithoutThreadInput | ThreadReplyUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
  }

  export type ThreadCreateNestedOneWithoutThreadReplyInput = {
    create?: XOR<ThreadCreateWithoutThreadReplyInput, ThreadUncheckedCreateWithoutThreadReplyInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadReplyInput
    connect?: ThreadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThreadReplyInput = {
    create?: XOR<UserCreateWithoutThreadReplyInput, UserUncheckedCreateWithoutThreadReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadReplyInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadUpdateOneRequiredWithoutThreadReplyNestedInput = {
    create?: XOR<ThreadCreateWithoutThreadReplyInput, ThreadUncheckedCreateWithoutThreadReplyInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadReplyInput
    upsert?: ThreadUpsertWithoutThreadReplyInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutThreadReplyInput, ThreadUpdateWithoutThreadReplyInput>, ThreadUncheckedUpdateWithoutThreadReplyInput>
  }

  export type UserUpdateOneRequiredWithoutThreadReplyNestedInput = {
    create?: XOR<UserCreateWithoutThreadReplyInput, UserUncheckedCreateWithoutThreadReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadReplyInput
    upsert?: UserUpsertWithoutThreadReplyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadReplyInput, UserUpdateWithoutThreadReplyInput>, UserUncheckedUpdateWithoutThreadReplyInput>
  }

  export type ThreadCreateNestedManyWithoutBoardInput = {
    create?: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput> | ThreadCreateWithoutBoardInput[] | ThreadUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutBoardInput | ThreadCreateOrConnectWithoutBoardInput[]
    createMany?: ThreadCreateManyBoardInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput> | ThreadCreateWithoutBoardInput[] | ThreadUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutBoardInput | ThreadCreateOrConnectWithoutBoardInput[]
    createMany?: ThreadCreateManyBoardInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type ThreadUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput> | ThreadCreateWithoutBoardInput[] | ThreadUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutBoardInput | ThreadCreateOrConnectWithoutBoardInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutBoardInput | ThreadUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ThreadCreateManyBoardInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutBoardInput | ThreadUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutBoardInput | ThreadUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput> | ThreadCreateWithoutBoardInput[] | ThreadUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutBoardInput | ThreadCreateOrConnectWithoutBoardInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutBoardInput | ThreadUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ThreadCreateManyBoardInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutBoardInput | ThreadUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutBoardInput | ThreadUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ThreadCreateWithoutUserInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ThreadReply?: ThreadReplyCreateNestedManyWithoutThreadInput
    Board?: BoardCreateNestedOneWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutUserInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boardBoardId?: string | null
    ThreadReply?: ThreadReplyUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutUserInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type ThreadCreateManyUserInputEnvelope = {
    data: ThreadCreateManyUserInput | ThreadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadReplyCreateWithoutUserInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutThreadReplyInput
  }

  export type ThreadReplyUncheckedCreateWithoutUserInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    threadId: string
  }

  export type ThreadReplyCreateOrConnectWithoutUserInput = {
    where: ThreadReplyWhereUniqueInput
    create: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput>
  }

  export type ThreadReplyCreateManyUserInputEnvelope = {
    data: ThreadReplyCreateManyUserInput | ThreadReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithWhereUniqueWithoutUserInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutUserInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
  }

  export type ThreadUpdateManyWithWhereWithoutUserInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutUserInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    threadId?: StringFilter<"Thread"> | string
    title?: StringFilter<"Thread"> | string
    content?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    userId?: StringFilter<"Thread"> | string
    boardBoardId?: StringNullableFilter<"Thread"> | string | null
  }

  export type ThreadReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: ThreadReplyWhereUniqueInput
    update: XOR<ThreadReplyUpdateWithoutUserInput, ThreadReplyUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadReplyCreateWithoutUserInput, ThreadReplyUncheckedCreateWithoutUserInput>
  }

  export type ThreadReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: ThreadReplyWhereUniqueInput
    data: XOR<ThreadReplyUpdateWithoutUserInput, ThreadReplyUncheckedUpdateWithoutUserInput>
  }

  export type ThreadReplyUpdateManyWithWhereWithoutUserInput = {
    where: ThreadReplyScalarWhereInput
    data: XOR<ThreadReplyUpdateManyMutationInput, ThreadReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type ThreadReplyScalarWhereInput = {
    AND?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
    OR?: ThreadReplyScalarWhereInput[]
    NOT?: ThreadReplyScalarWhereInput | ThreadReplyScalarWhereInput[]
    replyId?: StringFilter<"ThreadReply"> | string
    content?: StringFilter<"ThreadReply"> | string
    createdAt?: DateTimeFilter<"ThreadReply"> | Date | string
    updatedAt?: DateTimeFilter<"ThreadReply"> | Date | string
    threadId?: StringFilter<"ThreadReply"> | string
    userId?: StringFilter<"ThreadReply"> | string
  }

  export type UserCreateWithoutThreadInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ThreadReply?: ThreadReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ThreadReply?: ThreadReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
  }

  export type ThreadReplyCreateWithoutThreadInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutThreadReplyInput
  }

  export type ThreadReplyUncheckedCreateWithoutThreadInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ThreadReplyCreateOrConnectWithoutThreadInput = {
    where: ThreadReplyWhereUniqueInput
    create: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput>
  }

  export type ThreadReplyCreateManyThreadInputEnvelope = {
    data: ThreadReplyCreateManyThreadInput | ThreadReplyCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type BoardCreateWithoutThreadInput = {
    boardId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUncheckedCreateWithoutThreadInput = {
    boardId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutThreadInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutThreadInput, BoardUncheckedCreateWithoutThreadInput>
  }

  export type UserUpsertWithoutThreadInput = {
    update: XOR<UserUpdateWithoutThreadInput, UserUncheckedUpdateWithoutThreadInput>
    create: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadInput, UserUncheckedUpdateWithoutThreadInput>
  }

  export type UserUpdateWithoutThreadInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ThreadReply?: ThreadReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ThreadReply?: ThreadReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadReplyUpsertWithWhereUniqueWithoutThreadInput = {
    where: ThreadReplyWhereUniqueInput
    update: XOR<ThreadReplyUpdateWithoutThreadInput, ThreadReplyUncheckedUpdateWithoutThreadInput>
    create: XOR<ThreadReplyCreateWithoutThreadInput, ThreadReplyUncheckedCreateWithoutThreadInput>
  }

  export type ThreadReplyUpdateWithWhereUniqueWithoutThreadInput = {
    where: ThreadReplyWhereUniqueInput
    data: XOR<ThreadReplyUpdateWithoutThreadInput, ThreadReplyUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadReplyUpdateManyWithWhereWithoutThreadInput = {
    where: ThreadReplyScalarWhereInput
    data: XOR<ThreadReplyUpdateManyMutationInput, ThreadReplyUncheckedUpdateManyWithoutThreadInput>
  }

  export type BoardUpsertWithoutThreadInput = {
    update: XOR<BoardUpdateWithoutThreadInput, BoardUncheckedUpdateWithoutThreadInput>
    create: XOR<BoardCreateWithoutThreadInput, BoardUncheckedCreateWithoutThreadInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutThreadInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutThreadInput, BoardUncheckedUpdateWithoutThreadInput>
  }

  export type BoardUpdateWithoutThreadInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateWithoutThreadInput = {
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateWithoutThreadReplyInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutThreadInput
    Board?: BoardCreateNestedOneWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutThreadReplyInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    boardBoardId?: string | null
  }

  export type ThreadCreateOrConnectWithoutThreadReplyInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutThreadReplyInput, ThreadUncheckedCreateWithoutThreadReplyInput>
  }

  export type UserCreateWithoutThreadReplyInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadReplyInput = {
    userId?: string
    ip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadReplyInput, UserUncheckedCreateWithoutThreadReplyInput>
  }

  export type ThreadUpsertWithoutThreadReplyInput = {
    update: XOR<ThreadUpdateWithoutThreadReplyInput, ThreadUncheckedUpdateWithoutThreadReplyInput>
    create: XOR<ThreadCreateWithoutThreadReplyInput, ThreadUncheckedCreateWithoutThreadReplyInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutThreadReplyInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutThreadReplyInput, ThreadUncheckedUpdateWithoutThreadReplyInput>
  }

  export type ThreadUpdateWithoutThreadReplyInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThreadNestedInput
    Board?: BoardUpdateOneWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutThreadReplyInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    boardBoardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutThreadReplyInput = {
    update: XOR<UserUpdateWithoutThreadReplyInput, UserUncheckedUpdateWithoutThreadReplyInput>
    create: XOR<UserCreateWithoutThreadReplyInput, UserUncheckedCreateWithoutThreadReplyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadReplyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadReplyInput, UserUncheckedUpdateWithoutThreadReplyInput>
  }

  export type UserUpdateWithoutThreadReplyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadReplyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateWithoutBoardInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutThreadInput
    ThreadReply?: ThreadReplyCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutBoardInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    ThreadReply?: ThreadReplyUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutBoardInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput>
  }

  export type ThreadCreateManyBoardInputEnvelope = {
    data: ThreadCreateManyBoardInput | ThreadCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithWhereUniqueWithoutBoardInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutBoardInput, ThreadUncheckedUpdateWithoutBoardInput>
    create: XOR<ThreadCreateWithoutBoardInput, ThreadUncheckedCreateWithoutBoardInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutBoardInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutBoardInput, ThreadUncheckedUpdateWithoutBoardInput>
  }

  export type ThreadUpdateManyWithWhereWithoutBoardInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutBoardInput>
  }

  export type ThreadCreateManyUserInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boardBoardId?: string | null
  }

  export type ThreadReplyCreateManyUserInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    threadId: string
  }

  export type ThreadUpdateWithoutUserInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ThreadReply?: ThreadReplyUpdateManyWithoutThreadNestedInput
    Board?: BoardUpdateOneWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutUserInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardBoardId?: NullableStringFieldUpdateOperationsInput | string | null
    ThreadReply?: ThreadReplyUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutUserInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardBoardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThreadReplyUpdateWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutThreadReplyNestedInput
  }

  export type ThreadReplyUncheckedUpdateWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threadId?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadReplyUncheckedUpdateManyWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threadId?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadReplyCreateManyThreadInput = {
    replyId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ThreadReplyUpdateWithoutThreadInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThreadReplyNestedInput
  }

  export type ThreadReplyUncheckedUpdateWithoutThreadInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadReplyUncheckedUpdateManyWithoutThreadInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadCreateManyBoardInput = {
    threadId?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ThreadUpdateWithoutBoardInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThreadNestedInput
    ThreadReply?: ThreadReplyUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutBoardInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ThreadReply?: ThreadReplyUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutBoardInput = {
    threadId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}